import React from 'react';
import Main from "@/components/Main/Main";
import Editors from "@/components/what-we-think/Editors/Editors";
import Articles from "@/components/what-we-think/Articles/Articles";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="What we think" header="Our thinking"
                  description="The latest research, analyses and strategies to help future-focused organisations thrive in this period of great challenge"/>
            <Editors/>
            <Articles type="All articles"/>
        </div>
    )
}
