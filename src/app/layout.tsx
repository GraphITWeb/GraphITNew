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
        icon: './favicon.ico',
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
        <link rel="preload" as="image" href="../assets"/>
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
