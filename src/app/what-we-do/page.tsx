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
                                   title="Next Gen AI Transformation"
                                   description="Focus on modernizing legacy IT systems to make companies AI-centric and AI-driven, data engineering, and cloud integration."
                    />
                    <OfferingBlock imgBlock={Offering2}
                                   title="AI Copilots"
                                   description="Emphasizes customer offering quite unique to our company - AI Agent/Copilots - specialist solutions that helps companies create their platform specific companions, which assist users with navigating their softwares, databanks and web pages"
                    />
                    <OfferingBlock imgBlock={Offering3}
                                   title="Generative AI"
                                    description="Emphasize your custom GenAI development, such as intellectual chat bots or other similar services (AI Outsourcing)"
                    />
                    <OfferingBlock imgBlock={Offering4}
                                   title="Big Data"
                                   description="Will comprise of multiple subsections"
                    />
                </div>
            </div>
            <Posts/>
        </div>
    )
}
