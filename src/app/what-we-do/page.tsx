import React from 'react';
import Main from "@/components/Main/Main";
import OfferingBlock from "@/components/what-we-do/OfferingBlock/OfferingBlock";
import Offering from "../../assets/Offering.png";
import Offering2 from "../../assets/Offering2.png";
import Offering4 from "../../assets/Offering4.png";
import './WhatWeDo.css'
import Posts from "@/components/what-we-do/Posts/Posts";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="What we do" header="Pioneering boundless innovation"
                  description="Our offerings are built to inspire and deliver results. Find out how we can partner with you to create impactful changes that last."
                  />

            <div className="offering__blocks__big">
                <div className="offering__blocks">
                    <OfferingBlock imgBlock={Offering}
                                   link='/next-gen'
                                   title="Next-Gen AI Transformation"
                                   description="Together with you, we define, build, implement, and scale cutting-edge Generative AI solutions that drive unparalleled impact for your business and society. Our expertise accelerates progress, empowering organizations to achieve breakthrough moments and redefine their future."
                    />
                    <OfferingBlock imgBlock={Offering2}
                                   link='/ai-copilots'
                                   title="AI Copilots"
                                   description="Revolutionise data interaction with a powerful AI copilot that transforms complex data into clear, actionable insights. Tailored for each platform, this AI-driven tool empowers users to access critical information by simply asking a question, delivering rapid, high-quality insights that elevate decision-making and drive strategic advantage."
                    />
                    <OfferingBlock imgBlock={Offering4}
                                   link='/data-platform'
                                   title="Data Platforms"
                                   description="Big Data solutions turn raw information into powerful, strategic assets that drive informed decision-making and uncover new growth opportunities. From data integration and structuring to advanced analytics, we provide end-to-end support that enables organizations to leverage their data at scale."
                    />
                </div>
            </div>
            <Posts/>
        </div>
    )
}
