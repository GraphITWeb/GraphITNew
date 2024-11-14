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
                <Main subText="Careers" header="We’re looking for talented people"
                      description="Lorem ipsum dolor sit amet consectetur. Risus tortor ipsum nunc mattis scelerisque curabitur at. In ac tortor cras at scelerisque risus. Congue odio mauris scelerisque ipsum."
                      />
                <Image src={CareersImage} className="careers__image" alt="Careers"/>
                <CareersList />
            </div>
        </>
    )
}