'use client'
import People from "@/components/our-people/People/People";
import React, {useRef} from "react";
import Sviat from '../../../assets/Sviat.png'
import Max from '../../../assets/Max.png';
import Nick from "../../../assets/Nick.png";
import Mykola from '../../../assets/Kolya.png'
import Sasha from '../../../assets/Sasha.png'
import Viktoriia from '../../../assets/Viktoriia.png'

import './OurPeopleBlock.css'
const OurPeopleBlock = () =>{
    const ourPeopleRef= useRef(null);
    const scroll = (direction:string) => {
        const scrollAmount = 432; // Adjust the scroll amount based on your layout
        if (ourPeopleRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ourPeopleRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return(<>
            <div ref={ourPeopleRef} className="our__people">
                <People imgUser={Nick} name='Nick Gontarev' description='Founder, CEO'/>
                <People imgUser={Max} name='Max Verveha' description='Founder, Lead - Next-Gen AI Transformation'/>
                <People imgUser={Sviat} name='Sviat Nahirnyi' description='Founder, Lead - Data Platforms'/>
                <People imgUser={Mykola} name='Mykola Kyrychenko' description='Founder, Lead - AI Copilots'/>
                <People imgUser={Sasha} name='Alexandra Slyusar' description='Vice President, Sales & Strategic Initiatives'/>
                <People imgUser={Viktoriia} name='Viktoria Denysenko' description='Vice President, Brand Development & Growth'/>
            </div>
            <div className="our__people__buttons">
                <div className="arrow" onClick={() => scroll('left')} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                    </svg>
                </div>
                <div className="arrow" onClick={() => scroll('right')} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default OurPeopleBlock