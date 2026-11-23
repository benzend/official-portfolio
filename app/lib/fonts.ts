import { Geist_Mono, Montserrat, Quicksand } from "next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
});

/** Italic is only the closing line. Keep the face available without a preload. */
export const montserratItalic = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "italic",
  display: "swap",
  preload: false,
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-geist-mono",
  display: "swap",
});
