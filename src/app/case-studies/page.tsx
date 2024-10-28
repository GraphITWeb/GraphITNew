import React from 'react';
import Main from "@/components/Main/Main";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Case studies" header="Together, we can reinvent your business"
                  description="Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself"/>
            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            </div>
        </div>
    )
}
