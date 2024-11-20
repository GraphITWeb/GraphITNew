'use client'
import React from "react";
import './ContactUsBlock.css';
interface ContactUsBlockProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string;
}
const ContactUsBlock: React.FC<ContactUsBlockProps> = ({icon,title,description,details}) => {
    const isEmail=details==='transform@graph-it.co.uk'
    return(
    <div className="contactus__block">
        <div className="our__vision__svg">
            <div className="our__vision__svg__small">
                {icon}
            </div>
        </div>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <h6 onClick={()=>{
                if(isEmail) {
                    window.location.href = 'mailto:transform@graph-it.co.uk'
                }
            }} style={isEmail?{color:'var(--orange)',cursor:'pointer'}:{color:'var(--orange)'}} dangerouslySetInnerHTML={{ __html: details }}/>
        </div>

    </div>
  )
}
export default ContactUsBlock;