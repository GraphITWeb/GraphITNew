'use client';
import './Sticky.css'
import {useEffect, useState} from "react";

const DataPlatform = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const container = document.getElementById('container');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const containerRect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (containerRect.top <= viewportHeight / 2 + 150) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="container" className="we__meant__sticky">
            <h1 className="sticky__text" style={{
                opacity: isVisible ? 1 : 0,
                whiteSpace: "word-wrap",
            }}>
                Transform Your<br/> Data

            </h1>

            <div className="unlocked_block" style={{marginTop: '1vh'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    Data is an integral part to decision-making, but scattered and siloed information limits its potential. Our Data Platform solutions bring everything together into a unified, high-performance system, enabling real-time insights that fuel smarter decisions and operational efficiency. A sustainable, scalable data platform is key to AI readiness, and we help you build that foundation.
                </strong>
            </div>
            <div className="unlocked_block" style={{marginLeft:'auto'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    At Graphit, we take a transformative approach. Our Data Platforms are embedded with a deep understanding of the client&#39;s existing architecture and aligned with best practices for AI readiness, integrating diverse data into one cohesive system. This streamlined infrastructure drives operational gains, improves decision accuracy, and enables predictive capabilities, all while reducing complexity and cutting costs.
                </strong>
            </div>
            <div className="unlocked_block" style={{marginRight: 'auto',marginBottom: '60vh'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    We guide you all the way from designing architecture and integrating data sources to deploying a scalable platform. Our goal is to create an efficient data environment that powers innovation, helps you adapt quickly, and drives long-term growth. With Graphit, you’re not just implementing a data solution — you’re transforming your operations with a resilient, scalable platform that drives sustained success and prepares your business for the AI future.
                </strong>
            </div>
        </div>
    );
}

export default DataPlatform;
