import React from "react";
import './ContactUsBlock.css';
interface ContactUsBlockProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string;
}
const ContactUsBlock: React.FC<ContactUsBlockProps> = ({icon,title,description,details}) => {
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
            <h6 style={{color:'var(--orange)'}}>{details}</h6>
        </div>

    </div>
  )
}
export default ContactUsBlock;