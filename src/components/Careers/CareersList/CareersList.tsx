'use client'
import './CareersList.css';
import React, {useEffect, useState} from "react";
import CareersBlock from "@/components/Careers/CareersBlock/CareersBlock";
import CareersModal from "@/components/Careers/CareersModal/CareersModal";
import careersData from "@/data/careers.json";
import {ICareer} from "@/interfaces/interfaces";
interface ListProps {
    name:string;
}
const CareersList: React.FC<ListProps> = ({name}) => {

    const [activeCareers, setActiveCareers] = useState<number|null>(null);
    const [careers,setCareers]=useState<ICareer[]>();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setCareers(careersData)
    }, []);
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
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                <CareersModal career={careers[activeCareers]}
                              setActiveCareers={setActiveCareers}
                />
            }
            <h3 className="careers__header">
                {name}
            </h3>
            {careers?.map((career, index) => (
                <CareersBlock position={career.position}
                              direction={career.direction}
                              country={career.country}
                              description={career.shortDescription}
                              time={career.time}
                              salary={career.salary}
                              setActiveCareers={()=>setActiveCareers(index)}
                              key={index}
                />
            ))}
        </>
    )
}
export default CareersList