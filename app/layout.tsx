import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Ojha | Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years of experience building scalable applications across telecommunications, construction, logistics, and finance.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Node.js",
    "React",
    "Python",
    "AWS",
    "Microservices",
  ],
  authors: [{ name: "Akash Ojha" }],
  openGraph: {
    title: "Akash Ojha | Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years of experience building scalable applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
