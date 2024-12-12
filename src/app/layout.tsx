import type {Metadata} from "next";
import "./globals.css";
import './Footer.css';
import './Navbar.css'
import React from "react";
import Navbar from "@/components/UI/Navbar/Navbar";
import Footer from "@/components/UI/Footer/Footer";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Figtree, Hanken_Grotesk} from 'next/font/google';
import Head from "next/head";

const figtree = Figtree({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    display: 'swap',
    variable:'--figtree',

});
const hanken = Hanken_Grotesk({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    display: 'swap',
    variable:'--hanken-grotesk'
});
export const metadata: Metadata = {
    title: "Graphit",
    description: "Graphit is a London-based technology-consulting firm that operates on the intersection of data, AI and business strategy.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${figtree.variable} ${hanken.variable}`}>
        <Head>
            <link
                rel="icon"
                type="image/ico"
                href="/white_theme-16x16.ico"
                sizes="16x16"
                media="(prefers-color-scheme: light)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/white_theme-32x32.ico"
                sizes="32x32"
                media="(prefers-color-scheme: light)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/white_theme-48x48.ico"
                sizes="48x48"
                media="(prefers-color-scheme: light)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/white_theme-64x64.ico"
                sizes="64x64"
                media="(prefers-color-scheme: light)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/favicon.ico"
            />
            <link
                rel="apple-touch-icon"
                type="image/ico"
                href="/favicon.ico"
            />
            <link
                rel="apple-touch-icon-precomposed"
                type="image/ico"
                href="/favicon.ico"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/black_theme-16x16.ico"
                sizes="16x16"
                media="(prefers-color-scheme: dark)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/black_theme-32x32.ico"
                sizes="32x32"
                media="(prefers-color-scheme: dark)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/black_theme-48x48.ico"
                sizes="48x48"
                media="(prefers-color-scheme: dark)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/black_theme-64x64.ico"
                sizes="64x64"
                media="(prefers-color-scheme: dark)"
            />
            <link
                rel="icon"
                type="image/ico"
                href="/black_theme.ico"
                sizes="64x64"
                media="(prefers-color-scheme: dark)"
            />
        </Head>
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
