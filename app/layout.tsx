import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} bg-[#F3F4F7]`}>
        <div className="flex gap-8 p-8">
          <div className="flex-shrink-0">
            <Sidebar />
          </div>
          <div className="w-full">
            <Navbar />

            <div className="mt-8">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
