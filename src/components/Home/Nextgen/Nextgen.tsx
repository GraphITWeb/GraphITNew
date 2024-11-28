'use client'
import './Nextgen.css'
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import NextGenImage from "../../../assets/home/NextGen.webp";
import AICopilots from "../../../assets/home/AICopilot.webp";
import BigData from "../../../assets/home/BigData.webp";
import Button from "@/components/UI/Button/Button";
import useMobile from "@/hooks/useMobile";

const Nextgen = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);
    const images = [NextGenImage, AICopilots, BigData];
    const nextgenRef = useRef(null);
    const isMobile = useMobile(768)
    const blockRefs = useRef<(HTMLDivElement)[]>([]);
    const handleSetActive = (index: number) => {
        if (!isMobile && sectionRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const {top} = sectionRef.current.getBoundingClientRect();
            if (index === 2) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const scrollToPosition = window.scrollY + top + (index * sectionRef.current.offsetHeight) / 3 - 350;
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });
            }
            else{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const scrollToPosition = window.scrollY + top + (index * sectionRef.current.offsetHeight) / 3;
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });
            }
        } else {
            if (nextgenRef.current) {
                console.log('yeah')
                console.log(window.innerWidth);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                nextgenRef.current.scrollLeft = index === 0 ? 0 : index === 1 ? window.innerWidth * 0.77 : window.innerWidth * 1.5;
            }
            setActive(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const {top, height} = sectionRef.current.getBoundingClientRect();
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                const sectionTop = window.scrollY + top;
                const blockHeight = height / 3;
                const currentBlock = Math.floor((scrollPosition - sectionTop) / blockHeight);
                if ((currentBlock >= 0 && currentBlock < 3) && !isMobile) {
                    setActive(currentBlock);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (nextgenRef.current&&isMobile) {
                const { scrollLeft, scrollWidth, clientWidth } = nextgenRef.current;
                const scrollPercent=(scrollLeft / (scrollWidth - clientWidth)) * 100
                if(scrollPercent<33){
                    setActive(0)
                }else if(scrollPercent<66){
                    setActive(1)
                }
                else{
                    setActive(2)
                }
            }
        };

        const element = nextgenRef.current;
        if (element) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            element.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (element) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                element.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);



    return (
        <>
            <div ref={sectionRef} className="nextgen">
                <div className="nextgen__sticky">
                    <div>
                        <h2 style={{textAlign: 'center'}}>Driving The Next Frontier
                        </h2>
                        <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>
                            We blend science with business expertise to redefine your operational landscape.
                        </sub>
                    </div>
                    <div className="nextgen__block">
                        <div className="nextgen__block__block" ref={nextgenRef}>
                            <div
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                ref={blockRefs.current[0]}
                                className={active === 0 ? "nextgen__block__item active" : "nextgen__block__item"}
                                onClick={() => handleSetActive(0)}>
                                <div className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h4>
                                        Next-Gen AI Transformation
                                    </h4>
                                </div>
                                <sub>
                                    Modernize your business by adopting AI the right way, optimizing operations and
                                    unlocking new horizons for future growth.
                                </sub>
                            </div>
                            <div
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                ref={blockRefs.current[1]}
                                className={active === 1 ? "nextgen__block__item active" : "nextgen__block__item"}
                                onClick={() => handleSetActive(1)}>
                                <div
                                    className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h4>
                                        AI Copilots
                                    </h4>
                                </div>
                                <sub>
                                    Empower users with intelligent copilots that simplify workflows and enhance
                                    productivity across platforms.
                                </sub>
                            </div>
                            <div
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                ref={blockRefs.current[2]}
                                className={active === 2 ? "nextgen__block__item active" : "nextgen__block__item"}
                                onClick={() => handleSetActive(2)}>
                                <div className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h4>
                                        Data Platforms
                                    </h4>
                                </div>
                                <sub>
                                    Transform vast data into actionable insights with platforms and cloud solutions
                                    designed for optimised, AI-powered decision-making. </sub>
                            </div>
                        </div>
                        <div className="nextgen__image">
                            <Image style={{width: '100%', height: '100%', borderRadius: 12}} src={images[active]}
                                   alt={''}/>
                            <Button onClick={() => {
                                if(active===0) {
                                    window.location.href = '/next-gen'
                                }
                                else if(active===1) {
                                    window.location.href = '/ai-copilots'
                                }
                                else {
                                    window.location.href = '/data-platforms'
                                }

                            }} label={'Learn more'}
                                    btnStyle={{padding: '12px 32px', position: "absolute", right: 24, bottom: 24}}
                                    btnDivStyle={{fontSize: 18}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nextgen;