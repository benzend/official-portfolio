import { GoogleAnalytics } from "@next/third-parties/google";
import { geistMono, montserrat, montserratItalic, quicksand } from "./lib/fonts";
import { metadata } from "./metadata";
import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
        data-italic-font={montserratItalic.className}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-SL9C8VBCQ5" />
    </html>
  );
}
