import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartikey Kakaria",
  description: "Kartikey Kakaria is a young developer from Amritsar, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-white bg-gray-900 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
