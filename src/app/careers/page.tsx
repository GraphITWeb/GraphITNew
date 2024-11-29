import Main from "@/components/Main/Main";
import React from "react";
import './Careers.css'
import CareersList from "@/components/Careers/CareersList/CareersList";
import Image from 'next/image'
export default function Careers() {

    return (
        <>
            <div className="flex flex-col items-center justify-items-center">
                <Main subText="Careers" header="Where People Drive Progress"
                      description="Join a team where innovation meets opportunity. Explore a culture that empowers you to grow, lead, and make a lasting impact."
                />
                <Image
                    src="/assets/Careers.webp"
                    className="careers__image"
                    alt="Careers"
                    priority
                />
                <CareersList name='Open Positions'/>
            </div>
        </>
    )
}