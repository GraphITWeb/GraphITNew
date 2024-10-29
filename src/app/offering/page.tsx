import React from 'react';
import Main from "@/components/Main/Main";
import Posts from "@/components/what-we-do/Posts/Posts";
import OfferingInfo from "@/components/offering/OfferingInfo/OfferingInfo";
import OfferingBlock from "@/components/offering/OfferingBlock/OfferingBlock";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Offerings" header="Take the world by Next-Gen AI Transformation"
                  description="Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people around the world."/>
            <OfferingInfo/>
            <div className="flex flex-row gap-1 justify-start w-full" style={{paddingLeft:80}}>
                <h2>Reinvent with</h2>
                <h2 style={{fontWeight:700}}>Next-Gen AI Transformation</h2>
            </div>
            <OfferingBlock/>
            <Posts/>
        </div>
    )
}
