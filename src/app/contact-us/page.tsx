import React from 'react';
import ContactMap from "@/components/ContactUs/ContactMap/ContactMap";
import Main from "@/components/Main/Main";

export default function ContactUsPage() {
    return (
        <>
        <Main subText="Contact us" header="We’d like to hear from you" description="We have offices and teams around the world."/>
        <div style={{
            position: 'relative',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ContactMap/>
        </div>
</>
)
    ;
}
