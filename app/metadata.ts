import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Benjamin Scott | Software Engineer & Web Developer",
    template: "%s | Benjamin Scott"
  },
  description: "Professional software engineer specializing in high-quality website development, Ruby on Rails applications, and custom software solutions. Building fast, accessible, and user-friendly web applications that convert visitors into customers.",
  keywords: ["software engineer", "web developer", "website development", "Ruby on Rails", "React", "Next.js", "full-stack development", "custom software", "frontend development", "backend development"],
  authors: [{ name: "Benjamin Scott" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Benjamin Scott | Software Engineer & Web Developer",
    description: "Professional software engineer specializing in high-quality website development, Ruby on Rails applications, and custom software solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Benjamin Scott Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Scott | Software Engineer & Web Developer",
    description: "Professional software engineer specializing in high-quality website development, Ruby on Rails applications, and custom software solutions.",
    creator: "@TheBenzend",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};