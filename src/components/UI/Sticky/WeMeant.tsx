'use client';
import './Sticky.css'
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
                    <div><h3 style={{color:"var(--orange)"}}>Innovate</h3></div>
                </h3>
                <strong style={{color: 'var(--text-gray)'}}>
                    Push boundaries and unlock new horizons. At Graphit, innovation is more than a buzzword—it’s our way
                    of building intelligent, forward-thinking solutions that help organizations stay ahead in a rapidly
                    evolving world.</strong>
            </div>

            <div className="unlocked_block" style={{marginLeft: 'auto'}}>
                <h3>
                    <div><h3 style={{color:"var(--orange)"}}>Redefine</h3></div>
                </h3>
                <strong style={{color: 'var(--text-gray)'}}>
                    Reimagine what’s achievable by setting ambitious goals and carving out clear paths to success. We
                    work with our clients to refine strategies, clarify objectives, and design actionable steps that
                    drive continuous, meaningful progress.
                </strong>
            </div>

            <div className="unlocked_block" style={{marginBottom: '50vh'}}>
                <h3>
                    <div><h3 style={{color:"var(--orange)"}}>Transform</h3></div>
                </h3>
                <strong style={{color: 'var(--text-gray)'}}>
                    Turn potential into reality. We identify untapped opportunities, leverage existing strengths, and
                    deploy AI-driven insights that enable lasting transformation, unlocking new levels of impact for our
                    clients and their industries.
                </strong>
            </div>
        </div>
    );
}

export default WeMeant;
