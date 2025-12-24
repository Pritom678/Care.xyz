import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
import { loginUser } from "@/actions/server/auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (user) {
          return user; // Must have: id (string), email, name, role
        }
        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "credentials") {
        return true; // Already validated in authorize
      }

      if (account.provider === "google") {
        const usersCollection = dbConnect(collections.USERS);

        // Check if user already exists (by email only – allows linking later if needed)
        const existingUser = await usersCollection.findOne({ email: user.email });

        if (existingUser) {
          return true;
        }

        // Create new Google user
        const newUser = {
          provider: "google",
          email: user.email,
          name: user.name || user.email.split("@")[0],
          image: user.image || null, // Save profile picture
          role: "family", // Default role – change to "caregiver" or handle selection later
          createdAt: new Date(),
        };

        const result = await usersCollection.insertOne(newUser);
        return result.acknowledged;
      }

      return true;
    },

    async jwt({ token, user, account }) {
      // First sign-in: user object is available
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
      }

      // For Google users on token refresh (when user not present)
      if (account?.provider === "google" && token.email && !token.role) {
        const usersCollection = dbConnect(collections.USERS);
        const dbUser = await usersCollection.findOne({ email: token.email });
        if (dbUser) {
          token.role = dbUser.role;
          token.id = dbUser._id.toString();
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        // Optionally add image if you want it in session
        // session.user.image = token.picture;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/auth/error",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;