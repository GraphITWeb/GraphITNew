import React from 'react';
import Main from "@/components/Main/Main";
import OfferingBlock from "@/components/what-we-do/OfferingBlock/OfferingBlock";
import Offering from "../../assets/Offering.png";
import Offering2 from "../../assets/Offering2.png";
import Offering3 from "../../assets/Offering3.png";
import Offering4 from "../../assets/Offering4.png";
import './WhatWeDo.css'
import Posts from "@/components/what-we-do/Posts/Posts";
export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="What we do" header="Our core offerings"
                  description="Lorem ipsum dolor sit amet consectetur. At in pulvinar vitae amet vel enim sapien purus. Sapien interdum nec facilisi tempus. Faucibus laoreet sed fames purus"/>
            <div className="offering__blocks__big">
                <div className="offering__blocks">
                    <OfferingBlock imgBlock={Offering}
                                   title="Next-Gen AI Transformation"
                                   description="Together with you, we define, build, implement, and scale cutting-edge Generative AI solutions that drive unparalleled impact for your business and society. Our expertise accelerates progress, empowering organizations to achieve breakthrough moments and redefine their future."
                    />
                    <OfferingBlock imgBlock={Offering2}
                                   title="AI Copilots"
                                   description="Revolutionise data interaction with a powerful AI copilot that transforms complex data into clear, actionable insights. Tailored for each platform, this AI-driven tool empowers users to access critical information by simply asking a question, delivering rapid, high-quality insights that elevate decision-making and drive strategic advantage."
                    />
                    <OfferingBlock imgBlock={Offering3}
                                   title="Generative AI"
                                   description="Our Generative AI solutions empower organizations to revolutionize user engagement, automate complex processes, and drive innovation at scale. By developing custom AI-driven tools Graphit enables clients to transform their operations and deliver seamless, highly personalised experiences."
                    />
                    <OfferingBlock imgBlock={Offering4}
                                   title="Big Data"
                                   description="Big Data solutions turn raw information into powerful, strategic assets that drive informed decision-making and uncover new growth opportunities. From data integration and structuring to advanced analytics, we provide end-to-end support that enables organizations to leverage their data at scale."
                    />
                </div>
            </div>
            <Posts/>
        </div>
    )
}
