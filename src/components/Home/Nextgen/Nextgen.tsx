'use client'
import './Nextgen.css'
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Phit from "../../../assets/phit.jpg";
import Illustration from "../../../assets/NextGen.png";
import Button from "@/components/Button/Button";
import useMobile from "@/hooks/useMobile";

const Nextgen = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);
    const images = [Phit, Illustration, Phit, Illustration];
    const nextgenRef = useRef(null);
    const isMobile=useMobile(768)
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const {top, height} = sectionRef.current.getBoundingClientRect();
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                const sectionTop = window.scrollY + top;
                const blockHeight = height / 4;
                const currentBlock = Math.floor((scrollPosition - sectionTop) / blockHeight);
                console.log(isMobile)
                if (nextgenRef.current&&isMobile) {
                    console.log((scrollPosition - sectionTop - 200) / 25)
                    let translateXValue = (scrollPosition - sectionTop - 200) / 25;

                    if(translateXValue>75.8) {
                        translateXValue=75.8
                    }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    nextgenRef.current.style.transform = `translateX(-${translateXValue}%)`;
                }
                if (currentBlock >= 0 && currentBlock < 4) {
                    setActive(currentBlock);
                }
            }
        };

        // Додаємо слухача на подію прокручування
        window.addEventListener('scroll', handleScroll);

        // Видаляємо слухача, коли компонент буде знищено
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div ref={sectionRef} className="nextgen">
                <div className="nextgen__sticky">
                    <div>
                        <h2  style={{textAlign: 'center'}}>Innovating is What We Do
                        </h2>
                        <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>
                            We blend science with business expertise to redefine your operational landscape.
                        </sub>
                    </div>
                    <div className="nextgen__block">
                        <div className="nextgen__block__block" ref={nextgenRef}>
                            <div className={active === 0 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h5>
                                        Next-Gen AI Transformation
                                    </h5>
                                </div>
                                <p>
                                    Modernize your business by adopting AI the right way, optimizing operations and unlocking new horizons for future growth.
                                </p>
                            </div>
                            <div className={active === 1 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h5>
                                        AI Copilots
                                    </h5>
                                </div>
                                <p>
                                    Empower users with intelligent copilots that simplify workflows and enhance productivity across platforms.
                                </p>
                            </div>
                            <div className={active === 2 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h5>
                                        Generative AI
                                    </h5>
                                </div>
                                <p>
                                    Drive innovation with custom Generative AI tools that elevate user engagement and automate complex tasks.
                                </p>
                            </div>
                            <div className={active === 3 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    {/*<NextgenIcon/>*/}
                                    <h5>
                                        Big Data
                                    </h5>
                                </div>
                                <p>
                                    Transform vast data into actionable insights with platforms and cloud solutions designed for optimised, AI-powered decision-making.                                </p>
                            </div>
                        </div>
                        <div className="nextgen__image">
                            <Image style={{width: '100%', height: '100%', borderRadius: 12}} src={images[active]}
                                   alt={''}/>
                            <Button onClick={() => window.location.href = '/technical'} label={'Learn more'}
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