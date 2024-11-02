import Main from "@/components/Main/Main";
import React from "react";
import Image from "next/image";
import CareersImage from "@/assets/Careers.png";
import './Careers.css'
import BritishFlag from "@/assets/british.png";
import CareersBlock from "@/components/Careers/CareersBlock/CareersBlock";
export default function Careers() {
    return (
        <>
            <div className="flex flex-col items-center justify-items-center">
                <Main subText="Careers" header="We’re looking for talented people"
                      description="Lorem ipsum dolor sit amet consectetur. Risus tortor ipsum nunc mattis scelerisque curabitur at. In ac tortor cras at scelerisque risus. Congue odio mauris scelerisque ipsum."
                      />
                <Image src={CareersImage} alt="Careers" style={{
                    borderRadius: 24,
                    border: '1px solid #1E1E4D',
                    width:'Calc(100vw - 160px)',
                    height:'auto',
                }}/>
                <h3 style={{marginTop:64,width:842,marginBottom:8}}>
                    Design
                </h3>
                <CareersBlock position='Product Designer'
                              direction="Design"
                              flagImage={BritishFlag}
                              country="United Kingdom"
                              description="We’re looking for a mid-level product designer to join our team."
                              time="Full-time"
                              salary="80k - 100k"/>
                <CareersBlock position='Product Designer'
                              direction="Design"
                              flagImage={BritishFlag}
                              country="United Kingdom"
                              description="We’re looking for a mid-level product designer to join our team."
                              time="Full-time"
                              salary="80k - 100k"/>
                <CareersBlock position='Product Designer'
                              direction="Design"
                              flagImage={BritishFlag}
                              country="United Kingdom"
                              description="We’re looking for a mid-level product designer to join our team."
                              time="Full-time"
                              salary="80k - 100k"/>
            </div>
        </>
    )
}