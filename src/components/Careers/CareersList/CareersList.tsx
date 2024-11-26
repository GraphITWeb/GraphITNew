'use client'
import './CareersList.css';
import React, {useEffect, useState} from "react";
import CareersBlock from "@/components/Careers/CareersBlock/CareersBlock";
import CareersModal from "@/components/Careers/CareersModal/CareersModal";
interface ListProps {
    name:string;
}
const CareersList: React.FC<ListProps> = ({name}) => {

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
                <CareersModal position='Data Engineer'
                              direction="Engineering"
                              country="Interntaional"
                              description="We’re looking for an ambitious and motivated Middle Data Engineer to join our rapidly growing international team."
                              time="Full-time"
                              salary="Competitive"
                              setActiveCareers={setActiveCareers}
                />
            }
            <h3 className="careers__header">
                {name}
            </h3>
            <CareersBlock position='Data Engineer'
                          direction="Engineering"
                          country="International"
                          description="We’re looking for an ambitious and motivated Middle Data Engineer to join our rapidly growing international team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"
                          country="International"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"

                          country="International"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"

                          country="International"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="Competitive"
                          setActiveCareers={setActiveCareers}
            />
        </>
    )
}
export default CareersList