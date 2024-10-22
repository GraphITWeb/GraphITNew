'use client';
import './Unlocked.css'
import { useEffect, useState } from "react";

const Unlocked = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const container = document.getElementById('container');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const containerRect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (containerRect.top <= viewportHeight / 2 + 150 ) {
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
        <div id="container" style={{ position: "relative", display:'flex',flexDirection:'column',width:'100%',padding:80,gap:130,marginTop:200,transition: 'opacity 0.5s ease', }}>
            <h1 className="sticky__text" style={{
                opacity: isVisible ? 1 : 0,
                whiteSpace: 'nowrap',
            }}>
                AI Unlocked
            </h1>

            <div className="unlocked_block" style={{marginTop:'1vh'}}>
                <h3>Understanding
                    <div><h3>Your Needs</h3></div>
                </h3>
                <strong style={{ color: 'var(--text-gray)' }}>
                    When you go onto this square, the description changes to reflect the new environment or scenario you&#39;re in, providing context-specific information or actions.
                </strong>
            </div>

            <div className="unlocked_block" style={{marginLeft:'auto'}}>
                <h3>Understanding
                    <div><h3>Your Needs</h3></div>
                </h3>
                <strong style={{ color: 'var(--text-gray)' }}>
                    When you go onto this square, the description changes to reflect the new environment or scenario you&#39;re in, providing context-specific information or actions.
                </strong>
            </div>

            <div className="unlocked_block" style={{marginBottom:'50vh'}}>
                <h3>Understanding
                    <div><h3>Your Needs</h3></div>
                </h3>
                <strong style={{ color: 'var(--text-gray)' }}>
                    When you go onto this square, the description changes to reflect the new environment or scenario you&#39;re in, providing context-specific information or actions.
                </strong>
            </div>
        </div>
    );
}

export default Unlocked;
