'use client';
import Image from "next/image";
import CaseLegal from "@/assets/CaseLegalMain.webp";
import AI from "@/assets/CaseAI.webp";
import Netflix from "@/assets/CaseNetflix.webp";
import CaseCommerce from "@/assets/CaseCommerce.webp";
import Button from "@/components/UI/Button/Button";
import './CRM.css';
import {useEffect, useRef, useState} from "react";
import useMobile from "@/hooks/useMobile";


const CRM = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isMobile = useMobile(768);
    const crmRef = useRef<HTMLDivElement | null>(null);

    const clearExistingTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleSlide = (direction: 'left' | 'right') => {
        if (crmRef.current) {
            const newIndex = direction === 'right' ? index + 1 : index - 1;
            const normalizedIndex = (newIndex + 4) % 4;
            const transformValue = `translateX(-${normalizedIndex * 100}vw)`;
            crmRef.current.style.transition = 'transform 1s ease';
            crmRef.current.style.transform = transformValue;
            setIndex(normalizedIndex);
        }
    };

    const changeIndex = (direction: 'left' | 'right') => {
        if(!isMobile){
            clearExistingTimeout();
            setIndex((prevIndex) => {
                return direction === 'right' ? (prevIndex + 1) % 4 : (prevIndex + 4 - 1) % 4;
            });
            handleSlide(direction);
        }else{
            const newIndex = direction === 'right' ? index + 1 : index - 1;
            setIndex((prevIndex) => {
                return direction === 'right' ? (prevIndex + 1) % 4 : (prevIndex + 4 - 1) % 4;
            });
            const normalizedIndex = (newIndex + 4) % 4;
            const scrollValue = normalizedIndex * window.innerWidth;
            console.log(scrollValue)
            if (crmRef.current) {
                crmRef.current.scrollLeft = scrollValue;
            }
        }
    };

    useEffect(() => {
        setVisible(false);
        const timer = setTimeout(() => {
            setVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [index]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            changeIndex('right');
        }, 10000);

        return () => clearExistingTimeout();
    }, [index]);
    return (
        <>
            <div className="CRM">
                <div>
                    <h2 style={{textAlign: "center"}}>Redefining What’s Possible</h2>
                    <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>
                        Explore how our transformative solutions drive growth, innovation, and value across industries
                    </sub>
                </div>
                <div className="CRM__blocks" ref={crmRef}>
                    {/* Block 1 */}
                    <div className={`CRM__block ${index === 0 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{left: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{right: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                      fill="white"/>
                            </svg>
                        </div>
                        <Image
                            src={CaseLegal}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h4>
                                    Powering Legal Excellence: AI Solution for Swiss Legal Professionals
                                </h4>
                                <p>
                                    Handcrafted intelligent legal assistant that transforms how legal professionals access and use information. By turning complex legal data into instant, actionable insights, it empowers users to navigate over 100,000 legal cases and laws effortlessly—redefining the future of legal practice.
                                </p>
                            </div>
                            <Button href = '/case-studies' label='See case studies'
                                    btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className={`CRM__block ${index === 1 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{left: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{right: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                      fill="white"/>
                            </svg>
                        </div>
                        <Image
                            src={Netflix}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h4>Revolutionising Streaming Performance: Scalable Data Platform for Telecom Leaders</h4>
                                <p>
                                    A bespoke, cloud-agnostic, high-performance solution that sets new standards for network reliability, enabling the client to boost audience engagement, secure top-tier streaming contracts (Disney, Netflix), and unlock new revenue streams—ultimately redefining streaming excellence.                                </p>
                            </div>
                            <Button href='/case-studies' label='See case studies'
                                    btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className={`CRM__block ${index === 2 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{left: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{right: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                      fill="white"/>
                            </svg>
                        </div>
                        <Image
                            src={AI}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h4>Building Empathy at Scale: Mental Health Chatbot for Accessible Support
                                </h4>
                                <p>
                                    AI-powered chatbot designed to make mental health support more accessible and effective. The platform permitted the client to offer human-like therapeutic interactions, boost user engagement and achieve scalable performance - setting a new standard for digital healthcare and broader wellness innovation.
                                </p>
                            </div>
                            <Button href='/case-studies' label='See case studies'
                                    btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
                        </div>
                    </div>
                    {/* Block 4 */}
                    <div className={`CRM__block ${index === 3 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{left: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{right: 32}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                      fill="white"/>
                            </svg>
                        </div>
                        <Image
                            src={CaseCommerce}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h4>
                                    Shaping Operational Efficiency: Data Solutions Driving Global Expansion
                                </h4>
                                <p>
                                    Scalable data solution that reshaped the international e-commerce operations of a Fortune 500 member. Leveraging leading data frameworks, enabled to digitally transform the company, effectively refine their global strategies, and boost ROI - reimagining their paths to leadership in a highly competitive market
                                </p>
                            </div>
                            <Button href = '/case-studies' label='See case studies'
                                    btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
                        </div>
                    </div>
                </div>
                <div style={{position: "relative", display: 'flex', flexDirection: 'row',marginTop:32,justifyContent:'space-between',width:'100%'}}>
                    <div onClick={() => changeIndex('left')} className="CRM__block__arrow mobile"
                         style={{position: "relative", top: 0, left: 0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                        </svg>
                    </div>
                    <div onClick={() => changeIndex('right')} className="CRM__block__arrow mobile"
                         style={{position: "relative", top: 0, right: 0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                        </svg>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CRM;
