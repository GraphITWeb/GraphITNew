'use client'
import People from "@/components/our-people/People/People";
import React, {useRef} from "react";
import Sviat from '../../../assets/our-people/Sviat.png';
import Max from '../../../assets/our-people/Max.png';
import Nick from "../../../assets/our-people/Nick.png";
import Mykola from '../../../assets/our-people/Kolya.png';
import Sasha from '../../../assets/our-people/Sasha.png';
import Viktoriia from '../../../assets/our-people/Viktoriia.png';
import Anna from '../../../assets/our-people/Anna.png';
import Roman from '../../../assets/our-people/Roman.png';
import Marian from '../../../assets/our-people/Marian.png';
import './OurPeopleBlock.css';

const OurPeopleBlock = () => {
    const ourPeopleRef = useRef<HTMLDivElement | null>(null);
    const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scroll = (direction: 'left' | 'right') => {
        if (!blockRefs.current || !ourPeopleRef.current) return;

        const container = ourPeopleRef.current;
        const blocks = blockRefs.current.filter(Boolean) as HTMLDivElement[];
        const containerRect = container.getBoundingClientRect();

        // Знаходимо елемент, найближчий до центру контейнера
        const closestIndex = blocks.reduce((closest, block, index) => {
            const blockRect = block.getBoundingClientRect();
            const blockCenter = (blockRect.left + blockRect.right) / 2;
            const containerCenter = (containerRect.left + containerRect.right) / 2;
            const distance = Math.abs(blockCenter - containerCenter);

            return distance < closest.distance
                ? {index, distance}
                : closest;
        }, {index: 0, distance: Infinity}).index;

        // Визначаємо новий індекс для скролу
        let targetIndex = direction === 'right' ? closestIndex + 1 : closestIndex - 1;
        targetIndex = Math.max(0, Math.min(targetIndex, blocks.length - 1)); // Обмеження індексу

        // Скрол до цільового елемента
        if (blocks[targetIndex]) {
            blocks[targetIndex].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
        }
    };

    const peoples = [
        {
            img: Max,
            name: 'Max Verveha',
            description: 'Max co-founded Graphit with a personal ambition to change how businesses harness AI. As CEO, Max shapes the company’s vision, oversees strategic initiatives and leads Next-Gen AI Transformation practice. He focuses on navigating enterprises through a complex world of AI and transforming them towards AI-driven leaders. Leveraging his expertise gained at EY-Parthenon, Deloitte and Google, Max maintains a strong background on the intersection of business and technology. Max holds a BSc in Management from the University College London (UCL) and Joint MSc Management & CEMS degrees from the London School of Economics (LSE) and Korea University. Beyond his professional pursuits, Max is an avid skier, enjoy travel and active leisure',
            position: 'Founder, CEO, Lead - Next-Gen AI Transformation',
        },
        {
            img: Nick,
            name: 'Nick Gontarev',
            description: "Nick co-founded Graphit with a vision to disrupt traditional consulting approaches, addressing the growing need to make corporations AI-ready and guide them through smart, effective AI rollout. At Graphit, Nick oversees its international operations and leads the company’s Strategic Expansion initiatives. Nick's career spans multiple sectors — from consulting to fintech to digital transformation — he has consistently pushed boundaries to deliver impactful outcomes. He holds a BA & MSc from King’s College London and the London School of Economics (LSE), and underwent MBA studies at Yale University. Outside of work, Nick is a passionate sportsman, having captained university Table Tennis teams, and is a long-standing rock fan who also enjoys travel and art.",
            position: 'Founder, COO & CFO',
        },
        {
            img: Sviat,
            name: 'Sviat Nahirnyi',
            description: 'Sviat joined forces with Nick, Max & Mykola to establish Graphit with an aim to empower corporations to leverage AI effectively by unlocking their data potential. As CDO and Data Platforms practice lead, Sviat oversees the development and innovation of cutting-edge data platforms, ensuring that clients are well-prepared for AI adoption by having sufficient, scalable data infrastructure. Sviat honed his expertise working with companies like WizzAir, Granger & Spirent, while also leading a team to design and deploy his own product to market. Sviat holds a BSc and MSc in Artificial Intelligence from the Lviv National Polytechnic University, focusing his research on data systems and big data processing. In his spare time, Sviat is passionate about Formula 1 and enjoys active leisure activities such as hiking.',
            position: 'Founder, CDO, Lead - Data Platforms',
        },
        {
            img: Mykola,
            name: 'Mykola Kyrychenko',
            description: 'Mykola co-founded Graphit with a personal mission to redefine the application of AI in modern industries. As CTO, Mykola leverages his deep expertise in Generative AI to define the company’s technical vision and drives innovation across its offerings, including the flagship AI Copilot solutions. With over 6 years of experience in the AI field, he has led the development of impactful AI solutions for major multinational corporations, bridging cutting-edge technology with real-world applications. Mykola holds a BSc and MSc in Applied Science from the Ukrainian Catholic University and Lviv National Polytechnic University and pursued studies at Rushford Business School in Geneva. Outside of work, Mykola is a professional chess player who has competed internationally, enjoys traveling, music, and art.',
            position: 'Founder, CTO, Lead - AI Copilots',
        },
        {
            img: Sasha,
            name: 'Aleksandra Slyusar',
            description: 'Aleksandra is CIO at Graphit, leading the company’s growth through innovation and creative business development initiatives. She liaises with cross-functional teams to optimize client engagement and refine sales pipelines, ensuring alignment with long-term growth objectives. Prior to joining Graphit, Aleksandra gained valuable experience at organizations such as Nestlé and Christian Dior, where she developed expertise in customer relationship management, strategic marketing, and campaign execution. Aleksandra holds a BSc in Management from the London School of Economics (LSE) and is passionate about leveraging data to create innovative growth strategies. Outside of work, she enjoys visiting art galleries, exploring contemporary design, and traveling.',
            position: 'CIO',
        },
        {
            img: Viktoriia,
            name: 'Viktoriia Denysenko',
            description: "Viktoriia is VP of Brand Development & Growth, spearheading strategic brand initiatives and driving market expansion through innovative communication strategies and content creation. She works closely with cross-functional teams to develop and implement comprehensive brand strategies that align with long-term business objectives. Her expertise spans marketing communications, event management, and digital content strategy, enabling her to build compelling narratives that resonate with diverse audiences and drive measurable results. Viktoriia holds a BA in Culture, Media and Creative Industries from King's College London, bringing a unique blend of creative insight and strategic thinking to technology space. Away from work, she enjoys her daily matcha ritual, loves running and pursues her passion for travel.",
            position: 'Vice President, Brand Development & Growth',
        },
        {
            img: Anna,
            name: 'Anna Haleznik',
            position: 'Vice President, Strategic Expansion',
            description: "Anna has joined Graphit in her position as VP to lead the company's strategic expansion. As a specialist in marketing strategies and B2B communications, she focuses on creating and implementing comprehensive marketing campaigns aimed at building effective sales funnels and strengthening brand presence. Anna develops personalized strategies to attract target audiences, conducts in-depth segment analysis, and integrates modern automation tools. Her key objective is to drive marketing initiatives that promote business growth and foster long-term relationships with clients. Outside of work, Anna is passionate about sports, which helps her maintain focus, discipline, and resilience - qualities she applies everyday in her professional endeavors.",
        },
        {
            img: Roman,
            name: 'Roman Bozhovskyi',
            position: 'Senior Associate, Data Platforms',
            description: "Roman is a Senior Associate at Graphit, where he contributes to crafting cutting-edge solutions as an engineer within Data Platforms practice. With a strong foundation in applied mathematics, he combines technical expertise with creative problem-solving to deliver seamless and impactful digital experiences. Roman obtained a BSc in Applied Mathematics at Lviv Polytechnic National University with focus on algorithm design and system architecture. Beyond his professional pursuits, Roman formerly was a part of Ukrainian Premier League side FC Lviv. He also enjoys immersing himself in books, exploring new ideas, and practising meditation.",
        },
        {
            img: Marian,
            name: 'Marian Kyrychenko',
            position: 'Senior Associate, AI Copilots',
            description: "Marian is a Senior Associate within the AI Copilots practice. With a robust background in computer engineering, he brings a deep understanding of cutting-edge technologies to develop transformative AI-driven solutions. Marian holds a BEng in Computer Science from Lviv Polytechnic National University focusing on practical applications of machine and deep learning algorithms. Outside of his professional achievements, Marian is a former professional chess player and a two-time European Chess Champion. Beyond chess, Marian also enjoys cybersport and football as his hobbies.",
        },
    ];


    return (
        <>
            <div ref={ourPeopleRef} className="our__people">
                {peoples.map((person, index) => (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <div className="people" key={index} ref={(el) => blockRefs.current[index] = el}>
                        <People
                            imgUser={person.img}
                            name={person.name}
                            description={person.description}
                            position={person.position}
                        />
                    </div>
                ))}
            </div>
            <div className="our__people__buttons">
                <div className="arrow" onClick={() => scroll('left')} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                    </svg>
                </div>
                <div className="arrow" onClick={() => scroll('right')} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default OurPeopleBlock;