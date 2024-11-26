import type {Metadata} from "next";
import "./globals.css";
import "./case-study.css";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
    title: "Graphit",
    description: "Graphit is a London-based technology-consulting firm that operates on the intersection of data, AI and business strategy.",
    icons: {
        icon: "./assets/Graphit.png",
        apple: "./assets/Graphit.png",
    },
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
