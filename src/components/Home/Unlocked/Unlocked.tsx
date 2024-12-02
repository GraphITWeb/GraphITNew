'use client';
import './Unlocked.css';
import '../../UI/Sticky/Sticky.css'
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
        <div id="container" className="unlocked_container">
            <h1 className="sticky__text" style={{
                opacity: isVisible ? 1 : 0,
                whiteSpace: 'nowrap',
            }}>
                AI Unlocked
            </h1>

            <div className="unlocked_block" style={{marginTop:'1vh'}}>
                <h5>Understanding<span> Your Needs</span>
                </h5>
                <strong style={{ color: 'var(--text-gray)' }}>
                    We begin by immersing ourselves in your organization’s strategic landscape, engaging with key stakeholders to identify unique challenges and goals. This foundational phase ensures that our AI-driven solutions are precisely aligned with your business vision.                </strong>
            </div>

            <div className="unlocked_block" style={{marginLeft:'auto'}}>
                <h5>Identifying<span>Opportunities</span>
                </h5>
                <strong style={{ color: 'var(--text-gray)' }}>
                    Leveraging our expertise in AI and analytics, we uncover hidden opportunities within your operations. From streamlining workflows to enhancing decision-making, we reveal areas where intelligent solutions can drive significant impact.
                </strong>
            </div>

            <div className="unlocked_block" style={{marginBottom:'50vh'}}>
                <h5>Creating
                    <span>Success Roadmap</span>
                </h5>
                <strong style={{ color: 'var(--text-gray)' }}>
                    We craft a comprehensive roadmap that integrates AI and big data seamlessly into your business. Designed for flexibility and scalability, our approach ensures that each phase - from discovery to implementation - delivers measurable results and supports your long-term strategy.
                </strong>
            </div>
        </div>
    );
}

export default Unlocked;
