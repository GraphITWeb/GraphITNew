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
            <OfferingInfo
                header1={''}
                header2={''}
                header3={''}
                header4={''}
                text1={''}
                text2={''}
                text3={''}
                text4={''}/>
            <div className="textPadding">
                <h2>Redefine with <span style={{fontWeight: 700}}>Next-Gen AI Transformation</span></h2>
            </div>
            <OfferingBlock/>
            <div style={{marginTop:96}}/>
            <Posts/>
        </div>
    )
}
