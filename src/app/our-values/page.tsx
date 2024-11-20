import React from 'react';
import './our-values.css';
import Main from "@/components/Main/Main";
import WeMeant from "@/components/who-we-are/WeMeant/WeMeant";
import TechnicalWhatBlock from "@/components/technical/TechnicalWhatBlock/TechnicalWhatBlock";

export default function OurValuesPage() {
    return (
        <div className="flex flex-col items-center justify-items-center p-0">
            <Main subText="Who we are" header="Our values"
                  description="At Graphit, our core values—Innovate, Redefine, Transform—drive everything we do. These principles guide our approach to tackling complex client challenges."/>
            <WeMeant/>
            <div className="our__value__what">
                <div className="our__value__what__header">
                    <h2>
                        Inspired by Innovation, Grounded in Responsibility

                    </h2>
                    <p style={{textAlign: "center", marginTop: 16}}>
                        We strive to create lasting impact by combining innovation with responsibility, empowering our clients, teams, and communities to thrive.
                    </p>
                </div>
                <TechnicalWhatBlock header="Responsible AI"
                                    description="AI holds transformative potential, and with it comes responsibility. Graphit helps clients design, deploy, and manage AI in a way that builds trust, mitigates risks, and maximizes value—ensuring AI serves as a force for good."/>
                <TechnicalWhatBlock header="Driving Positive Impact"
                                    description="We are dedicated to creating meaningful impact for our clients, our people, and the communities we serve. At Graphit, we believe in responsible leadership that drives progress, supports sustainability, and builds a better future for all."
                                    />
                <TechnicalWhatBlock header="Sustainability in Action"
                                    description="We partner with clients to integrate sustainability into their transformations, helping them achieve environmental, social, and governance (ESG) goals. Our own operations reflect this commitment, as we work to minimize our environmental footprint and contribute positively to society."/>
                <TechnicalWhatBlock header="Championing Diversity and Inclusion"
                                    description="We value diverse perspectives and experiences as essential drivers of innovation. By fostering an inclusive environment, we attract and empower individuals with unique insights, enabling us to deliver creative, effective solutions for our clients."/>
                <TechnicalWhatBlock header="Commitment to Ethical Business"
                                    description="At Graphit, integrity is at the heart of everything we do. Our team is united by a commitment to doing what’s right, providing exceptional value for our clients while upholding the highest ethical standards. This dedication to ethical business practices is what sets us apart."/>

            </div>
        </div>
    )
}
