import React from 'react';
import Main from "@/components/Main/Main";
import OurPeopleBlock from "@/components/our-people/OurPeopleBlock/OurPeopleBlock";
export default function OurPeoplePage() {

    return (
        <div className="flex flex-col items-center justify-items-center p-0">
            <Main subText="Who we are" header="Our people"
                  description="We are cross-disciplinary team that loves to create great experiences for our customers."/>
            <OurPeopleBlock/>
        </div>
    )
}
