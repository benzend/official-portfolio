import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Scott | Software Engineer & Web Developer",
  description: "Professional software engineer specializing in high-quality website development. Building fast, accessible, and user-friendly web applications that convert visitors into customers.",
  keywords: ["software engineer", "web developer", "website development", "high quality websites", "frontend development", "React", "Next.js", "accessible websites", "performance optimization"],
  authors: [{ name: "Benjamin Scott" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Benjamin Scott | Software Engineer & Web Developer",
    description: "Professional software engineer specializing in high-quality website development. Building fast, accessible, and user-friendly web applications that convert visitors into customers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Scott | Software Engineer & Web Developer",
    description: "Professional software engineer specializing in high-quality website development. Building fast, accessible, and user-friendly web applications that convert visitors into customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-SL9C8VBCQ5" />
    </html>
  );
}
