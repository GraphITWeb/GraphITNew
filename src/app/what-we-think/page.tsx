import React from 'react';
import Main from "@/components/Main/Main";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Contact us" header="We’d like to hear from you"
                  description="We have offices and teams around the world."/>
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
