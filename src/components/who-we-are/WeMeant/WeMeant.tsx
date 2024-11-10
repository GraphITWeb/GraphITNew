'use client';
import './WeMeant.css'
import {useEffect, useState} from "react";

const WeMeant = () => {
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
            }}>WE MEANT IT WHEN WE SAID</h1>

            <div className="unlocked_block" style={{marginTop: '1vh'}}>
                <h3>
                    <div><h3>Innovate</h3></div>
                </h3>
                <strong style={{color: 'var(--text-gray)'}}>
                    When you go onto this square, the description changes to reflect the new environment or scenario
                    you&apos;re in, providing context-specific information or actions. </strong>
            </div>

            <div className="unlocked_block" style={{marginLeft: 'auto'}}>
                <h3>
                    <div><h3>Redefine</h3></div>
                </h3>
                <strong style={{color: 'var(--text-gray)'}}>
                    Define clear objectives, set achievable milestones, and outline actionable steps to ensure
                    continuous progress toward your goals. </strong>
            </div>

            <div className="unlocked_block" style={{marginBottom: '50vh'}}>
                <h3>
                    <div><h3>Transform</h3></div>
                </h3>
                <strong style={{color: 'var(--text-gray)'}}>
                    Identify gaps in the market or workflow, explore new ideas, and leverage existing strengths to
                    unlock untapped potential. </strong>
            </div>
        </div>
    );
}

export default WeMeant;
