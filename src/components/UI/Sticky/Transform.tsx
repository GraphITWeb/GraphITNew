'use client';
import './Sticky.css'
import {useEffect, useState} from "react";

const Transform = () => {
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
            }}>Transform<br/>Your Business</h1>

            <div className="unlocked_block" style={{marginTop: '1vh'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    Together with you, we <span style={{color: 'var(--orange)',fontWeight:'700'}}>build</span>, <span style={{color: 'var(--orange)',fontWeight:'700'}}>deploy</span>, and <span style={{color: 'var(--orange)',fontWeight:'700'}}>scale</span> cutting-edge Generative AI solutions that drive unparalleled impact for your business and society. <span style={{color: 'var(--orange)',fontWeight:'700'}}>Artificial Intelligence</span> is reshaping industries, creating new opportunities, and driving measurable business impact. Yet, many companies find it challenging to fully realize its potential due to outdated tools or misalignment between technology and business strategy.
                </strong>
            </div>
            <div className="unlocked_block" style={{marginLeft:'auto'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    At Graphit, we take a fresh approach. Our Next-Gen AI Transformation offering is built to help businesses <span style={{color: 'var(--orange)',fontWeight:'700'}}>reimagine</span> their <span style={{color: 'var(--orange)',fontWeight:'700'}}>operations</span> and
                    achieve sustainable growth through tailored Generative AI solutions. By aligning AI with your strategic vision, we turn complexity into <span style={{color: 'var(--orange)',fontWeight:'700'}}>clarity</span> and innovation into <span style={{color: 'var(--orange)',fontWeight:'700'}}>results</span>.
                </strong>
            </div>
            <div className="unlocked_block" style={{marginBottom: '60vh'}}>
                <strong style={{color: 'var(--text-gray)'}}>
                    We are supporting you at <span style={{color: 'var(--orange)',fontWeight:'700'}}>every step</span> of your AI way — from defining an inspiring vision and launching pilot projects to scaling impactful solutions across the enterprise. Beyond delivering results today, we build the capabilities and frameworks needed to <span style={{color: 'var(--orange)',fontWeight:'700'}}>sustain success</span> in a rapidly changing world. With Graphit, you’re not just adopting AI — you’re <span style={{color: 'var(--orange)',fontWeight:'700'}}>transforming</span> your <span style={{color: 'var(--orange)',fontWeight:'700'}}>business</span> into a future-ready, <span style={{color: 'var(--orange)',fontWeight:'700'}}>AI leader</span>.
                </strong>
            </div>
        </div>
    );
}

export default Transform;
