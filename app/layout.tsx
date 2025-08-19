import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar"

export const metadata: Metadata = {
  title: "Atlas Informatics - Technology Solutions for Advanced Industries",
  description: "Empowering businesses with cutting-edge IT hardware, software, and security solutions that drive digital transformation and business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
