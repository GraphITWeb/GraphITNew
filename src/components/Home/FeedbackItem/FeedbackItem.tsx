import React from "react";
import Image, { StaticImageData } from "next/image";
interface FeedbackProps {
    imgUser: StaticImageData;
    description: string;
    name:string;
    position:string;
}

const FeedbackItem: React.FC<FeedbackProps> = ({name,imgUser, description,position}) => {
    return (
        <>
            <div className="feedback__block">
                <div className="feedback__block__header">
                    <Image width={48} height={48} style={{borderRadius:'50%',minHeight:48}} src={imgUser} alt='user'/>
                    <div className="flex flex-col gap-0">
                        <p style={{fontWeight: 500, color: 'white'}}>{name}</p>
                        <small style={{color: 'var(--text-gray)'}}>{position}</small>
                    </div>
                </div>
                <svg className="mobile" xmlns="http://www.w3.org/2000/svg" width="100%" height="2"
                     style={{border: 'solid 1px rgba(255, 255, 255, 0.15)'}} viewBox="0 0 303 2" fill="none">
                </svg>
                <svg className="pc" xmlns="http://www.w3.org/2000/svg" width="2" height="108" viewBox="0 0 2 108"
                     fill="none">
                    <path d="M1 0V108" stroke="white" strokeOpacity="0.15"/>
                </svg>
                <div className="feedback__block__description">
                    <p style={{color:'white'}}><q>{description}</q></p>
                </div>
            </div>
        </>
    )
}
export default FeedbackItem;