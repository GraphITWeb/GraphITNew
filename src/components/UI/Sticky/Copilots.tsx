'use client';
import './Sticky.css'
import {useEffect, useState} from "react";

const Copilots = () => {
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
                Transform Your Platform
            </h1>

            <div className="unlocked_block" style={{marginTop: '1vh'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    Artificial Intelligence is changing the way users <span style={{color: 'var(--orange)',fontWeight:'700'}}>interact</span> with <span style={{color: 'var(--orange)',fontWeight:'700'}}>technology</span>, creating demand for tools that <span style={{color: 'var(--orange)',fontWeight:'700'}}>simplify</span> complex data and <span style={{color: 'var(--orange)',fontWeight:'700'}}>deliver</span> actionable insights. However, many platforms struggle to provide a user-friendly experience, leaving end-users overwhelmed by inaccessible information.</strong>
                </div>
            <div className="unlocked_block" style={{marginLeft:'auto'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    Our AI Copilot service addresses this challenge by embedding intelligent, conversational assistants <span style={{color: 'var(--orange)',fontWeight:'700'}}>directly into</span> your <span style={{color: 'var(--orange)',fontWeight:'700'}}>platforms</span>.
                    These copilots are tailored to your users’ needs, enabling them to interact with your system more naturally, uncover insights effortlessly, and drive value from every interaction.
                </strong>
            </div>
            <div className="unlocked_block" style={{marginRight: 'auto',marginBottom: '60vh'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    We <span style={{color: 'var(--orange)',fontWeight:'700'}}>partner with you</span> through every stage of the AI Copilot journey — from designing an intuitive user interface and integrating advanced AI models to deploying scalable solutions. At Graphit, <span style={{color: 'var(--orange)',fontWeight:'700'}}>we go beyond</span> simply improving platform functionality — we pride ourselves for creating an engaging, empowering experience that sets your product apart and drives <span style={{color: 'var(--orange)',fontWeight:'700'}}>real value</span> for your users.
                </strong>
            </div>
        </div>
    );
}

export default Copilots;
