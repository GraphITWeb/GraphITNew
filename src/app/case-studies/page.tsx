import React from 'react';
import Main from "@/components/Main/Main";
import Articles from "@/components/what-we-think/Articles/Articles";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Case Studies" header="Transformation In Action"
                  description="See how we help our clients embrace and champion change with cutting-edge technology and future-focused strategy."/>
            <Articles type="Case studies"/>
        </div>
    )
}
