import React from 'react';
import Main from "@/components/Main/Main";
import OurPeopleBlock from "@/components/our-people/OurPeopleBlock/OurPeopleBlock";
import Business from "@/components/Careers/ToContact/Business";
export default function OurPeoplePage() {

    return (
        <div className="flex flex-col items-center justify-items-center p-0">
            <Main subText="Who we are" header="Our people"
                  description="At Graphit, our team unites scientific expertise with business acumen, crafting innovative solutions that blend technical excellence with real-world impact to drive our clients forward."
            />
            <OurPeopleBlock/>
            <Business/>
        </div>
    )
}
