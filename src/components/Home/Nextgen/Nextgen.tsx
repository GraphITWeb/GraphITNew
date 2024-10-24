'use client'
import './Nextgen.css'
import {useEffect, useRef, useState} from "react";

const NextgenIcon = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none">
        <path d="M9 14.25H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M9 11.25H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path
            d="M15.0002 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75H8.9998"
            stroke="white" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round"/>
        <path
            d="M8.25 6.75V6C8.25 5.00544 8.64509 4.05161 9.34835 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6.75H8.25Z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>)
}
const Nextgen = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const scrollPosition = window.scrollY + window.innerHeight / 2; // Поточна позиція скролу + половина вікна

                // Визначаємо номер активного блоку
                const sectionTop = window.scrollY + top;
                const blockHeight = height / 4; // Оскільки у нас 4 блоки
                const currentBlock = Math.floor((scrollPosition - sectionTop) / blockHeight);

                // Переконуємося, що індекс активного блоку знаходиться в допустимих межах
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
            <div ref={sectionRef} className="nextgen" style={{height: '200vh', position: 'relative', justifyContent: 'flex-start'}}>
                <div className="nextgen__sticky">
                    <div>
                        <h2>A CRM Designed with You in Mind.</h2>
                        <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>Customize everything to make
                            Venture adapt to your business, not the other way around.</sub>
                    </div>
                    <div className="nextgen__block">
                        <div className="flex flex-col gap-3 w-5/12">
                            <div className={active === 0 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    <NextgenIcon/>
                                    <h5>
                                        Next Gen AI
                                    </h5>
                                </div>
                                <p>
                                    Effortlessly manage customer data and interactions in a user-friendly platform.
                                    Effortlessly manage customer data and interactions in a user-friendly platform.
                                </p>
                            </div>
                            <div className={active === 1 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    <NextgenIcon/>
                                    <h5>
                                        Next Gen AI
                                    </h5>
                                </div>
                                <p>
                                    Effortlessly manage customer data and interactions in a user-friendly platform.
                                    Effortlessly manage customer data and interactions in a user-friendly platform. </p>
                            </div>
                            <div className={active === 2 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    <NextgenIcon/>
                                    <h5>
                                        Next Gen AI
                                    </h5>
                                </div>
                                <p>
                                    Effortlessly manage customer data and interactions in a user-friendly platform.
                                    Effortlessly manage customer data and interactions in a user-friendly platform. </p>
                            </div>
                            <div className={active === 3 ? "nextgen__block__item active" : "nextgen__block__item"}>
                                <div className="flex flex-row gap-2">
                                    <NextgenIcon/>
                                    <h5>
                                        Next Gen AI
                                    </h5>
                                </div>
                                <p>
                                    Effortlessly manage customer data and interactions in a user-friendly platform.
                                    Effortlessly manage customer data and interactions in a user-friendly platform. </p>
                            </div>
                        </div>
                        <div className="nextgen__image w-7/12">
                            Nextgen Image {active}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nextgen;