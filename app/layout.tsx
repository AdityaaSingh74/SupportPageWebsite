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
  title: "Aditya Singh - JARVIS Portfolio",
  description: "Futuristic Portfolio Dashboard with JARVIS Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JARVIS Home wrapper contains the blue animated panel */}
        <Home>
          {/* Navbar can be included if needed */}
          {/* <Navbar /> */}
          
          {/* Main content */}
          <main className="w-full h-full">
            {children}
          </main>
        </Home>
      </body>
    </html>
  );
}