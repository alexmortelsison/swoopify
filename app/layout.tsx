import type { Metadata } from "next";
import { Geist, Geist_Mono, Sacramento } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swoopify",
  description: "A matching website app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sacramento.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
