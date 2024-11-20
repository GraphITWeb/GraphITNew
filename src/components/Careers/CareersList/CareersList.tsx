'use client'
import './CareersList.css';
import React, {useEffect, useState} from "react";
import CareersBlock from "@/components/Careers/CareersBlock/CareersBlock";
import BritishFlag from "@/assets/british.png";
import CareersModal from "@/components/Careers/CareersModal/CareersModal";

const CareersList = () => {
    const [activeCareers, setActiveCareers] = useState<number|null>(null);
    useEffect(() => {
        if(activeCareers===null){
            document.body.style.overflow= 'auto';
        }
        else{
            document.body.style.overflow = 'hidden';
        }
    }, [activeCareers]);
    return (<>
            {activeCareers!==null &&
                <CareersModal position='Product Designer'
                              direction="Design"
                              flagImage={BritishFlag}
                              country="United Kingdom"
                              description="We’re looking for a mid-level product designer to join our team."
                              time="Full-time"
                              salary="Competitive"
                              setActiveCareers={setActiveCareers}
                />
            }
            <h3 className="careers__header">
                Design
            </h3>
            <CareersBlock position='Product Designer'
                          direction="Design"
                          flagImage={BritishFlag}
                          country="United Kingdom"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"
                          flagImage={BritishFlag}
                          country="United Kingdom"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"
                          flagImage={BritishFlag}
                          country="United Kingdom"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
        </>
    )
}
export default CareersList