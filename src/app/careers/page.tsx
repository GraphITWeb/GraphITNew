import Main from "@/components/Main/Main";
import React from "react";
import './Careers.css'
import CareersImage from "@/assets/Careers.webp";
import CareersList from "@/components/Careers/CareersList/CareersList";
import Image from 'next/image'
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Graphit | Careers",
    description:"Join a team where innovation meets opportunity. Explore a culture that empowers you to grow, lead, and make a lasting impact."
}
export default function Careers() {

    return (
        <>
            <div className="flex flex-col items-center justify-items-center">
                <Main subText="Careers" header="Where People Drive Progress"
                      description="Join a team where innovation meets opportunity. Explore a culture that empowers you to grow, lead, and make a lasting impact."
                />
                <Image
                    src={CareersImage}
                    className="careers__image"
                    alt="Careers"
                    width={2000}
                    height={1333}
                    priority={true}
                    loading={'eager'}
                />
                <CareersList name='Open Positions'/>
            </div>
        </>
    )
}