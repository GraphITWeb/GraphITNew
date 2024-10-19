import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "GraphIT",
  description: "GraphIT description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
