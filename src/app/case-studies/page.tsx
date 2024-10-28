import React from 'react';
import Main from "@/components/Main/Main";
import Articles from "@/components/what-we-think/Articles/Articles";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Service" header="Case Studies"
                  description="Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself"/>
            <Articles type="Case studies"/>
        </div>
    )
}
