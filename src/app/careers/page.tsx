import Main from "@/components/Main/Main";
import React from "react";
import './Careers.css'
import CareersList from "@/components/Careers/CareersList/CareersList";
import Head from "next/head";
export default function Careers() {
    return (
        <>
            <div className="flex flex-col items-center justify-items-center">
                <Head>
                    <link rel="preload" href="../../assets/Careers.webp" as="image" />
                </Head>
                <Main subText="Careers" header="Where People Drive Progress"
                      description="Join a team where innovation meets opportunity. Explore a culture that empowers you to grow, lead, and make a lasting impact."
                      />
                <img src="../../assets/Careers.webp" className="careers__image" alt="Careers"/>
                <CareersList name='Open Positions'/>
            </div>
        </>
    )
}