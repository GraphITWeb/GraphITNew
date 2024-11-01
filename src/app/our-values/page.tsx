import React from 'react';
import './our-values.css';
import Main from "@/components/Main/Main";
import WeMeant from "@/components/who-we-are/WeMeant/WeMeant";
import TechnicalWhatBlock from "@/components/technical/TechnicalWhatBlock/TechnicalWhatBlock";

export default function OurValuesPage() {
    return (
        <div className="flex flex-col items-center justify-items-center p-0">
            <Main subText="Who we are" header="Our values"
                  description="Graphit is a technology company which is expert in advanced AI solutions that propel your business forward. Learn more about the company and the team behind it."/>
            {/*<div className="our__values__text">*/}
            {/*    <h2>Change that matters</h2>*/}
            {/*    <p>Lorem ipsum dolor sit amet consectetur. At in pulvinar vitae amet vel enim sapien purus. Sapien*/}
            {/*        interdum nec facilisi tempus. Faucibus laoreet sed fames purus</p>*/}
            {/*</div>*/}
            <WeMeant/>
            <div className="our__value__what">
                <div className="our__value__what__header">
                    <h2>
                        Creating positive change
                    </h2>
                    <p style={{textAlign: "center", marginTop: 16}}>
                        We’re committed to creating positive change around the world and ensuring we act as responsible
                        business leaders for our people, our clients and the communities we call home
                    </p>
                </div>
                <TechnicalWhatBlock header="Focus first on talent"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
                <TechnicalWhatBlock header="Enable innovation"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
                <TechnicalWhatBlock header="Identify the optimal location"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
                <TechnicalWhatBlock header="Strengthen your digital core"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
            </div>
        </div>
    )
}
