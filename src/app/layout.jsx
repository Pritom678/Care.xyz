import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata = {
  metadataBase: new URL("https://care.xyz"),

  title: {
    default: "Care.xyz | Trusted Caregiving Services",
    template: "%s | Care.xyz",
  },

  description:
    "Care.xyz provides trusted caregiving services for children, elderly, and families. Book verified caregivers for safe, compassionate, and professional care.",

  keywords: [
    "caregiving services",
    "child care",
    "elder care",
    "home care services",
    "professional caregivers",
    "nanny services",
    "senior care",
    "Care.xyz",
  ],

  authors: [{ name: "Care.xyz Team", url: "https://care.xyz" }],
  creator: "Care.xyz",
  publisher: "Care.xyz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Care.xyz | Trusted Caregiving Services",
    description:
      "Book trusted caregivers for children and elderly care. Safe, compassionate, and reliable services at Care.xyz.",
    url: "https://care.xyz",
    siteName: "Care.xyz",
    images: [
      {
        url: "/og-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "Care.xyz Caregiving Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Care.xyz | Trusted Caregiving Services",
    description:
      "Find professional caregivers for children and seniors. Compassionate care you can trust.",
    images: [
      "https://res.cloudinary.com/do3iu9q7d/image/upload/v1766650849/Screenshot_2025-12-25_142016_be74ic.png",
    ],
    creator: "@carexyz", // optional
  },

  alternates: {
    canonical: "https://care.xyz",
  },

  category: "Healthcare & Caregiving",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${nunito.className} antialiased`}>
          <header>
            <Navbar></Navbar>
          </header>
          {children}
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
