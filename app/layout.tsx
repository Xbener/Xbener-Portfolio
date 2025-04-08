import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoonCity - Software Engineer",
  description:
    "Personal portfolio of James Jam, a Software Engineer and Open-source enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
