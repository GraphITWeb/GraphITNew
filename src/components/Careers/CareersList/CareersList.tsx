'use client'
import './CareersList.css';
import React, {useState} from "react";
import CareersBlock from "@/components/Careers/CareersBlock/CareersBlock";
import BritishFlag from "@/assets/british.png";
import CareersModal from "@/components/Careers/CareersModal/CareersModal";

const CareersList = () => {
    const [activeCareers, setActiveCareers] = useState<number|null>(null);
    return (<>
            {activeCareers!==null &&
                <CareersModal position='Product Designer'
                              direction="Design"
                              flagImage={BritishFlag}
                              country="United Kingdom"
                              description="We’re looking for a mid-level product designer to join our team."
                              time="Full-time"
                              salary="80k - 100k"
                              setActiveCareers={setActiveCareers}
                />
            }
            <h3 style={{marginTop: 64, width: 842, marginBottom: 8}}>
                Design
            </h3>
            <CareersBlock position='Product Designer'
                          direction="Design"
                          flagImage={BritishFlag}
                          country="United Kingdom"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="80k - 100k"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"
                          flagImage={BritishFlag}
                          country="United Kingdom"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="80k - 100k"
                          setActiveCareers={setActiveCareers}
            />
            <CareersBlock position='Product Designer'
                          direction="Design"
                          flagImage={BritishFlag}
                          country="United Kingdom"
                          description="We’re looking for a mid-level product designer to join our team."
                          time="Full-time"
                          salary="80k - 100k"
                          setActiveCareers={setActiveCareers}
            />
        </>
    )
}
export default CareersList