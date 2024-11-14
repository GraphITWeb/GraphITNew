'use client'
import React, { useEffect, useRef, useState } from "react";
import './OurVision.css';
import Image, { StaticImageData } from "next/image";

interface OurVisionProps {
    style?: React.CSSProperties;
    image: StaticImageData;
    svgIcon: React.ReactNode;
    title: string;
    description: string;
}

const OurVision: React.FC<OurVisionProps> = ({ style, image, svgIcon, title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        // Якщо реф не порожній, починаємо спостерігати за елементом
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        // Очищення при демонтажі компонента
        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <div className="our__vision__block" style={{ ...style }}>
            <Image src={image} alt="image" />
            <div
                className={`our__vision__content ${isVisible ? 'visible' : ''}`}
                style={style?.flexDirection=='row'?{ transform: 'translateX(100px)'}:{}}
                ref={contentRef}
            >
                <div className="our__vision__svg">
                    <div className="our__vision__svg__small">
                        {svgIcon}
                    </div>
                </div>
                <h3 style={{ marginTop: 8 }}>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurVision;
