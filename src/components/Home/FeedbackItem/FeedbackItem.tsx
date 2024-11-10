import Image, {StaticImageData} from "next/image";
import React from "react";

interface FeedbackProps {
    imgUser: StaticImageData;
    description: string;
}

const FeedbackItem: React.FC<FeedbackProps> = ({imgUser, description}) => {
    return (
        <>
            <div className="feedback__block">
                <div className="feedback__block__header">
                    <Image width={48} height={48} src={imgUser} alt='user'/>
                    <div className="flex flex-col gap-0">
                        <p style={{fontWeight: 500, color: 'white'}}>Courtney H.</p>
                        <small style={{color: 'var(--text-gray)'}}>UI/UX Designer</small>
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
                    <div className="flex flex-row gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <path
                                d="M16.0227 20L9.90142 15.3008L3.66197 19.8264L6.03942 12.2796L0 7.46574L7.5906 7.50077L10.0975 0L12.4113 7.56847L20 7.7466L13.8394 12.3891L16.0227 20Z"
                                fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <path
                                d="M16.0227 20L9.90142 15.3008L3.66197 19.8264L6.03942 12.2796L0 7.46574L7.5906 7.50077L10.0975 0L12.4113 7.56847L20 7.7466L13.8394 12.3891L16.0227 20Z"
                                fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <path
                                d="M16.0227 20L9.90142 15.3008L3.66197 19.8264L6.03942 12.2796L0 7.46574L7.5906 7.50077L10.0975 0L12.4113 7.56847L20 7.7466L13.8394 12.3891L16.0227 20Z"
                                fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <path
                                d="M16.0227 20L9.90142 15.3008L3.66197 19.8264L6.03942 12.2796L0 7.46574L7.5906 7.50077L10.0975 0L12.4113 7.56847L20 7.7466L13.8394 12.3891L16.0227 20Z"
                                fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <path
                                d="M16.0227 20L10 15.625L3.66197 19.8264L6.03942 12.2796L0 7.46574L7.5906 7.50077L10 0L12.4112 7.56847L20 7.7466L13.8394 12.3891L16.0227 20Z"
                                fill="url(#paint0_linear_1046_8493)"/>
                            <defs>
                                <linearGradient id="paint0_linear_1046_8493" x1="0" y1="9.99971" x2="20"
                                                y2="9.99971" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#DDDDDD"/>
                                    <stop offset="0.502224" stopColor="#DDDDDD"/>
                                    <stop offset="0.50257"/>
                                    <stop offset="1"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <small>{description}</small>
                </div>
            </div>
        </>
    )
}
export default FeedbackItem;