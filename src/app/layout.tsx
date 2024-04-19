import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-image h-full w-full bg-red-200 bg-[url('/foodBackground.jpg')] bg-cover bg-center">
      <body className={inter.className + ' bg-none h-full w-full bg-transparent flex items-start justify-center'}>{children}</body>
    </html>
  );
}