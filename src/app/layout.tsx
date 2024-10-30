import type {Metadata} from "next";
import "./globals.css";
import React, {Suspense} from "react";
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
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
            <Footer/>
        </div>
        </body>
        </html>
    );
}

export function Loading() {
    return (
        <div className="loading">
            LOADING TEXT
        </div>
    );
}