'use client'
import Ales from "@/assets/home/Ales.jpg";
import Ruslan from "@/assets/home/Ruslan.jpeg";
import Pavel from "@/assets/home/Pavel.png";
import Nima from "@/assets/home/Nima.jpg";
import FeedbackItem from "@/components/Home/FeedbackItem/FeedbackItem";
import React, {useRef} from "react";

const FeedbackBlock = () => {
    const reviewRef = useRef(null);
    const scroll = (direction: string) => {
        const scrollAmount = 0.9 * window.innerWidth;
        if (reviewRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            reviewRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="feedback">
            <div style={{textAlign: "center"}}>
                <h2>Journey To Success</h2>
                <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>
                    See what business leaders say about our team and how we deliver value
                </sub>
            </div>
            <div className="feedback__items" ref={reviewRef}>
                <FeedbackItem imgUser={Ales}
                              description={`Graphit's "Talk-To-Your-Data" AI Copilot has been a game-changer for our organization. Enabling customers to seamlessly interact with data boosted user’s platform engagement, made complex insights easily accessible and further informed analyst’s decision-making. translated into a substantial uptick in subscriptions to our platform. Graphit's AI Copilot has not only made our data more accessible but also turned it into a strategic advantage that powers our growth.`}
                              name="Ales Prochazka"
                              position="CEO of Legaltools"
                />
                <FeedbackItem imgUser={Ruslan}
                              description="Graphit provided us with a clear, actionable strategy for AI adoption. By identifying the most suitable AI use-cases for our business, they significantly facilitated and accelerated AI solution roll-out across our department, ensuring it targeted actual business bottlenecks. Thanks to their approach, we became a data-driven organization and substantially streamlined our operations, resulting in increased efficiency and measurable growth. Focusing on our needs ensured that the transformation was both effective and relevant to our internal KPIs."
                              name="Ruslan Kravets"
                              position="CEO of Medikit"
                />
                <FeedbackItem imgUser={Pavel}
                              description="Working with Graphit has transformed our approach to data management at Libernetix. Their contributions helped develop an efficient, intelligent and automated data analytics system, complemented by real-time dashboarding, which streamlined our operations and decision-making processes. Beyond their technical expertise, Graphit team’s value-first mindset played a key role in creating a 360° view of the business and substantially boosted overall operational efficiency."
                              name="Pavel Yeliseev"
                              position="CTO of Libernetix"
                />
                <FeedbackItem imgUser={Nima}
                              description="Graphit has been an incredible asset to us at Broya. Their technical expertise combined with business acumen are not only profound but also practically applied to real-world problems. Their work has significantly contributed to the success of our e-commerce revenue growth through data analytics capability roll-out enabling us to monitor factors such as customer lifetime and forecast demand. Graphit team is extremely professional and a pleasure to work with."
                              name="Nima Sotoadeh"
                              position="Founder of Broya"
                />
            </div>
            <div className="review__buttons">
                <div className="arrow" onClick={() => scroll('left')} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none">
                        <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                    </svg>
                </div>
                <div className="arrow" onClick={() => scroll('right')} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none">
                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                              fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default FeedbackBlock