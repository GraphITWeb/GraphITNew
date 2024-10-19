import React from 'react';
import Main from "@/components/Main/Main";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="What we do" header="Our core offerings"
                  description="Lorem ipsum dolor sit amet consectetur. At in pulvinar vitae amet vel enim sapien purus. Sapien interdum nec facilisi tempus. Faucibus laoreet sed fames purus"/>
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
