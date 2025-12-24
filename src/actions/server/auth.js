"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

/**
 * Register a new user (called from RegisterForm)
 */
export const postUser = async (payload) => {
  const { nid, name, email, contact, password, role } = payload;

  // Validation
  if (!nid || !name || !email || !contact || !password || !role) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  try {
    const db = dbConnect(collections.USERS);

    // Check duplicates
    const existingUser = await db.findOne({
      $or: [{ email }, { nid }, { contact }],
    });

    if (existingUser) {
      if (existingUser.email === email)
        return { success: false, message: "Email already registered." };
      if (existingUser.nid === nid)
        return { success: false, message: "NID already used." };
      if (existingUser.contact === contact)
        return { success: false, message: "Contact number already used." };
    }

    const hashedPassword = await bcrypt.hash(password, 14);

    const newUser = {
      provider: "credentials",
      nid: nid.trim(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      contact: contact.trim(),
      password: hashedPassword,
      role,
      createdAt: new Date(),
    };

    const result = await db.insertOne(newUser);

    if (result.acknowledged) {
      return {
        success: true,
        message: "User registered successfully",
        insertedId: result.insertedId?.toString(),
      };
    } else {
      return { success: false, message: "Failed to create user" };
    }
  } catch (error) {
    console.error("postUser error:", error);
    return { success: false, message: "Server error" };
  }
};

/**
 * Login user – used by NextAuth Credentials provider
 * Must return a user object with id, email, name, role (or null)
 */
export const loginUser = async (payload) => {
  const { email, password } = payload;

  if (!email || !password) {
    return null;
  }

  try {
    const db = dbConnect(collections.USERS);

    // Find user by email
    const user = await db.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return null; // User not found
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null; // Invalid password
    }

    // Return clean user object expected by NextAuth
    return {
      id: user._id.toString(), // Critical: NextAuth needs string id
      email: user.email,
      name: user.name,
      role: user.role, // Now correctly passed to JWT/session
    };
  } catch (error) {
    console.error("Error in loginUser:", error);
    return null;
  }
};
