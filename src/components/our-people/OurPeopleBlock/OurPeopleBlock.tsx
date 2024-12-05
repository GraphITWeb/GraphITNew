'use client'
import People from "@/components/our-people/People/People";
import React, {useRef} from "react";
import Sviat from '../../../assets/our-people/Sviat.png'
import Max from '../../../assets/our-people/Max.png';
import Nick from "../../../assets/our-people/Nick.png";
import Mykola from '../../../assets/our-people/Kolya.png'
import Sasha from '../../../assets/our-people/Sasha.png'
import Viktoriia from '../../../assets/our-people/Viktoriia.png'
import Anna from '../../../assets/our-people/Anna.png'
import './OurPeopleBlock.css'

const OurPeopleBlock = () => {
    const ourPeopleRef = useRef(null);
    const scroll = (direction: string) => {
        const scrollAmount = 432; // Adjust the scroll amount based on your layout
        if (ourPeopleRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ourPeopleRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return (<>
            <div ref={ourPeopleRef} className="our__people">
                <People imgUser={Max} name='Max Verveha'
                        description="Max co-founded Graphit alongside Nick, Sviat & Mykola with a personal ambition to redefine how businesses harness AI. As CEO, Max shapes the company’s vision and oversees its strategic initiatives, while he also leads Next-Gen AI Transformation practice - focused on helping enterprises navigate complex world of AI and transform towards AI driven leaders. His experience working with EY-Parthenon, Deloitte, Softserve and Google, Max has a strong background in crafting strategies on the intersection of business and technology that deliver real-world impact. Max holds a BSc in Management from the University College London (UCL) and Joint MSc Management & CEMS degrees from the London School of Economics (LSE) and Korea University. Beyond his professional pursuits, Max is an avid skier and a lover of adventure, always ready to explore new heights — both on the slopes and in business."
                        position='Founder, CEO, Lead - Next-Gen AI Transformation'/>
                <People imgUser={Nick}
                        name='Nick Gontarev'
                        description="Nick co-founded Graphit with Max, Sviat & Mykola with a vision to disrupt traditional consulting approaches, addressing the growing need to make corporations AI-ready and guide them through smart, effective AI rollout. At Graphit, Nick oversees its international operations and leads the company’s Sales & Strategic Initiatives. Nick's career spans multiple sectors — from consulting to fintech to digital transformation — he has consistently pushed boundaries to deliver impactful outcomes. He holds a BA & MSc from King’s College London and the London School of Economics (LSE), and underwent MBA studies at Yale University. Outside of work, Nick is a passionate sportsman, having captained university Table Tennis teams, and is a long-standing rock fan who also enjoys travel and art."
                        position='Founder, COO & CFO'/>
                <People imgUser={Sviat} name='Sviat Nahirnyi'
                        description="Sviat joined forces with Nick, Max & Mykola to establish Graphit with an aim to consulting and empower corporations to leverage AI effectively by unlocking data potential of companies. As CDO and Head of Data Platforms practice, Sviat leads the development and innovation of cutting-edge data platforms, ensuring that clients are well-prepared for AI adoption and have sufficient, scalable data infrastructure required to do so. Sviat honed his expertise working with companies like WizzAir, Granger & Spirent, while also leading a team to design, develop, and deploy his own product to market. Sviat holds a BSc and MSc in Artificial Intelligence from the Lviv National Polytechnic University, focusing his research on data systems and big data processing. In his spare time, Sviat is passionate about Formula 1 and enjoys active leisure activities such as running and hiking."
                        position='Founder, CDO, Lead - Data Platforms'/>
                <People imgUser={Mykola} name='Mykola Kyrychenko'
                        description="Mykola co-founded Graphit alongside Nick, Max & Sviat. Since company’s inception, his personal mission to revolutionise the application of AI in modern industries, leveraging his deep expertise in Generative AI long before it became mainstream. As CTO, Mykola defines the company’s technical vision and drives innovation across its offerings, including the flagship AI Copilot solutions. With over six years of experience in the AI field, he has a proven track record of leading the development of tailored, impactful AI solutions for major multinational firms, bridging cutting-edge technology with real-world applications. Mykola holds a BSc and MSc in Applied Science from the Ukrainian Catholic University (UCU) and Lviv National Polytechnic University and pursued studies at Rushford Business School in Geneva. Outside of work, Mykola is a professional chess player who has competed internationally and enjoys traveling, music, and art."
                        position='Founder, CTO, Lead - AI Copilots'/>
                <People imgUser={Sasha} name='Alexandra Slyusar'
                        description="Aleksandra is CIO at Graphit, leading the company’s growth through innovation and creative business development initiatives. She liaises with cross-functional teams to optimize client engagement and refine sales pipelines, ensuring alignment with long-term growth objectives. Prior to joining Graphit, Aleksandra gained valuable experience at organizations such as Nestlé and Christian Dior, where she developed expertise in customer relationship management, strategic marketing, and campaign execution. Aleksandra holds a BSc in Management from the London School of Economics (LSE) and is passionate about leveraging data to create innovative growth strategies. Outside of work, she enjoys visiting art galleries, exploring contemporary design, and traveling."
                        position='CIO'/>
                <People imgUser={Viktoriia} name='Viktoria Denysenko'
                        description="Viktoriia is VP of Brand Development & Growth, spearheading strategic brand initiatives and driving market expansion through innovative communication strategies and content creation. She works closely with cross-functional teams to develop and implement comprehensive brand strategies that align with long-term business objectives. Her expertise spans marketing communications, event management, and digital content strategy, enabling her to build compelling narratives that resonate with diverse audiences and drive measurable results. Viktoriia holds a BA in Culture, Media and Creative Industries from King's College London, bringing a unique blend of creative insight and strategic thinking to technology space. Away from work, she enjoys her daily matcha ritual, loves running and pursues her passion for travel."
                        position='Vice President, Brand Development & Growth'/>
                <People imgUser={Anna}
                        name='Anna Haleznik'
                        position='Vice President, Strategic Expansion'
                        description='Anna has joined Graphit in her position as VP to lead company’s strategic expansion. As a specialist in marketing strategies and B2B communications, she focuses on creating and implementing comprehensive marketing campaigns aimed at building effective sales funnels and strengthening brand presence. Anna develops personalized strategies to attract target audiences, conducts in-depth segment analysis, and integrates modern automation tools. Her key objective is to drive marketing initiatives that promote business growth and foster long-term relationships with clients. Outside of work, Anna is passionate about sports, which helps her maintain focus, discipline, and resilience - qualities she applies everyday in her professional endeavors.'/>
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
    )
}
export default OurPeopleBlock