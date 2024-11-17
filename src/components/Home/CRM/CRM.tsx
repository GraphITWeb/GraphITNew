'use client';
import Image from "next/image";
import Illustration from "@/assets/Illustration.png";
import Careers from "@/assets/Careers.png";
import Illustration2 from "@/assets/Illustration2.png";
import Button from "@/components/Button/Button";
import './CRM.css';
import {useEffect, useRef, useState} from "react";


const CRM = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const crmRef = useRef<HTMLDivElement | null>(null);

    const clearExistingTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleSlide = (direction: 'left' | 'right') => {
        if (crmRef.current) {
            const newIndex = direction === 'right' ? index + 1 : index - 1;
            const normalizedIndex = (newIndex + 3) % 3;
            const transformValue = `translateX(-${normalizedIndex * 100}vw)`;
            crmRef.current.style.transition = 'transform 1s ease';
            crmRef.current.style.transform = transformValue;
            setIndex(normalizedIndex);
        }
    };

    const changeIndex = (direction: 'left' | 'right') => {
        clearExistingTimeout(); // Очищаємо попередній таймер
        setIndex((prevIndex) => {
            return direction === 'right' ? (prevIndex + 1) % 3 : (prevIndex + 3 - 1) % 3;
        });
        handleSlide(direction);
    };

    useEffect(() => {
        setVisible(false);
        const timer = setTimeout(() => {
            setVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [index]);

    useEffect(() => {
        // Автоматичне переміщення через 5 секунд
        timeoutRef.current = setTimeout(() => {
            changeIndex('right');
        }, 5000);

        return () => clearExistingTimeout(); // Очищення таймера при зміні
    }, [index]);
    return (
        <>
            <div className="CRM">
                <div>
                    <h2>A CRM Designed with You in Mind.</h2>
                    <sub style={{ textAlign: 'center', width: '100%', display: 'block' }}>
                        Customize everything to make Venture adapt to your business, not the other way around.
                    </sub>
                </div>
                <div className="CRM__blocks" ref={crmRef}>
                    {/* Block 1 */}
                    <div className={`CRM__block ${index === 0 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{ left: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white" />
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{ right: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
                            </svg>
                        </div>
                        <Image
                            src={Illustration}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h5>
                                    Powering the Future: AI-Driven Innovation for Renewable Cars
                                </h5>
                                <p>
                                    By optimizing performance, increasing efficiency, and driving sustainability, our AI-powered solutions are transforming the future of transportation. See how we’re pushing the boundaries of what’s possible in the automotive world—innovation that’s driving change for a greener tomorrow.
                                </p>
                            </div>
                            <Button onClick={() => window.location.href = '/case-studies'} label='See case studies'
                                    btnStyle={{ padding: '12px 32px' }} btnDivStyle={{ fontSize: 18 }} />
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className={`CRM__block ${index === 1 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{ left: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white" />
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{ right: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
                            </svg>
                        </div>
                        <Image
                            src={Careers}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h5>Big data innovation</h5>
                                <p>
                                    See how we’re pushing the boundaries of what’s possible in the automotive world—innovation that’s driving change for a greener tomorrow.
                                </p>
                            </div>
                            <Button onClick={() => window.location.href = '/case-studies'} label='See case studies'
                                    btnStyle={{ padding: '12px 32px' }} btnDivStyle={{ fontSize: 18 }} />
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className={`CRM__block ${index === 2 ? 'active' : ''}`}>
                        <div onClick={() => changeIndex('left')} className="CRM__block__arrow" style={{ left: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white" />
                            </svg>
                        </div>
                        <div onClick={() => changeIndex('right')} className="CRM__block__arrow" style={{ right: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
                            </svg>
                        </div>
                        <Image
                            src={Illustration2}
                            alt="Illustration"
                            className={`w-full CRM__block__image ${visible ? 'visible' : ''}`}
                        />
                        <div className={`CRM__block__description ${visible ? 'visible' : ''}`}>
                            <div>
                                <h5>Information task</h5>
                                <p>
                                    By optimizing performance, increasing efficiency, and driving sustainability, our AI-powered solutions are transforming the future of transportation.
                                </p>
                            </div>
                            <Button onClick={() => window.location.href = '/case-studies'} label='See case studies'
                                    btnStyle={{ padding: '12px 32px' }} btnDivStyle={{ fontSize: 18 }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CRM;
