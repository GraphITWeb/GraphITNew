import type {Metadata} from "next";
import "./globals.css";
import './Footer.css';
import './Navbar.css'
import React from "react";
import Navbar from "@/components/UI/Navbar/Navbar";
import Footer from "@/components/UI/Footer/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        <div>
            <Analytics/>
            <SpeedInsights/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
