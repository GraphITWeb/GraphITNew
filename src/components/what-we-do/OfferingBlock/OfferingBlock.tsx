'use client'
import React from "react";
import './OfferingBlock.css';
import {StaticImageData} from "next/image";

interface OfferingBlockProps {
    imgBlock: StaticImageData;
    title: string;
    description: string;
}

const OfferingBlock: React.FC<OfferingBlockProps> = ({imgBlock, title, description}) => {
    return (
        <div className="offering__block" style={{
            background: `url(${imgBlock.src}) no-repeat center center`,
            backgroundSize: "cover",
        }}
             onClick={()=>{window.location.href='/offering'}}
        >
            <h2 style={{marginTop: 8}}>{title}</h2>
            <strong>{description}</strong>
            <div><sub style={{lineHeight: '24px', textAlign: "center"}}>Learn More</sub>
                <svg style={{marginTop:8}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
};

export default OfferingBlock;
