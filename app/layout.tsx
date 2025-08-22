import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/NavBar";

import Home from "@/components/HOME/home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Support Me Page",
  description: "Project Web Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Replace existing wrapper with Home component */}
        <div className="relative opacity-99 w-full h-screen bg-[#111111] bg-[linear-gradient(32deg,rgba(8,8,8,0.74)_30px,transparent)] bg-[size:60px_60px] bg-[position:-5px_-5px]">
          <Home>
            {/* Optionally add Navbar here */}
            {/* <Navbar /> */}
            <Navbar />

            {/* Main content area */}
            {/* Your page content */}
            {children}

            {/* Optionally add Footer here */}
            {/* <Footer /> */}
          </Home>
        </div> 
      </body>
    </html>
  );
}