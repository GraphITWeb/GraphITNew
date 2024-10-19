import React from 'react';
import Main from "@/components/Main/Main";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="About us" header="Who we are?"
                  description="Graphit is a technology company which is expert in advanced AI solutions that propel your business forward. Learn more about the company and the team behind it."/>
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
