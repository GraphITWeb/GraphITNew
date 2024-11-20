import Main from "@/components/Main/Main";
import React from "react";
import Image from "next/image";
import CareersImage from "@/assets/Careers.png";
import './Careers.css'
import CareersList from "@/components/Careers/CareersList/CareersList";
export default function Careers() {
    return (
        <>
            <div className="flex flex-col items-center justify-items-center">
                <Main subText="Careers" header="Where People Drive Progress"
                      description="Join a team where innovation meets opportunity. Explore a culture that empowers you to grow, lead, and make a lasting impact."
                      />
                <Image src={CareersImage} className="careers__image" alt="Careers"/>
                <CareersList />
            </div>
        </>
    )
}