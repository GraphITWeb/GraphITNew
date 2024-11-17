import React from 'react';
import Main from "@/components/Main/Main";
import Editors from "@/components/what-we-think/Editors/Editors";
import Articles from "@/components/what-we-think/Articles/Articles";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="What we think" header="Shaping What’s Next"
                  description="We harness front-line AI insights to empower future-focused leaders. Explore strategies and perspectives designed to navigate challenges and drive impactful growth."
            />
            <Editors/>
            <Articles type="All articles"/>
        </div>
    )
}
