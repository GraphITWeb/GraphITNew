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
        <div className="feedback" style={{zIndex:1}}>
            <div style={{textAlign: "center"}}>
                <h2>Journey To Success</h2>
                <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>
                    See what business leaders say about our team and how we deliver value
                </sub>
            </div>
            <svg className="pc" style={{position: 'absolute', left: 0, top: 600,zIndex:-1}} xmlns="http://www.w3.org/2000/svg"
                 width="180"
                 height="227" viewBox="0 0 180 227" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M67.2234 0.267434L67.6866 0L68.1498 0.267434L123.735 32.3595L124.198 32.6269V33.1618V96.7144L179.319 128.538L179.782 128.806V129.341V193.525V194.059L179.319 194.327L123.733 226.419L123.27 226.686L122.807 226.419L67.6866 194.595L12.5661 226.419L12.1029 226.686L11.6397 226.419L-43.9454 194.327L-44.4086 194.059V193.525V129.976L-99.5367 98.1482L-100 97.8807V97.3459V33.1618V32.6269L-99.5367 32.3595L-43.9517 0.267434L-43.4885 0L-43.0253 0.267434L12.099 32.0935L67.2234 0.267434ZM66.7588 192.991V129.972L12.099 98.4142L-42.5558 129.969V192.99L12.1029 224.547L66.7588 192.991ZM-43.5697 128.321L-98.1471 96.811V33.6967L-43.4885 2.13947L11.1702 33.6967V96.7172L-43.5697 128.321ZM13.0279 96.7128V33.6967L67.6866 2.13947L122.345 33.6967V96.7128L67.6866 128.27L13.0279 96.7128ZM68.6144 129.972L123.355 98.3673L177.929 129.875V192.99L123.27 224.547L68.6144 192.991V129.972Z"
                      fill="url(#paint0_linear_189_1442)"/>
                <defs>
                    <linearGradient id="paint0_linear_189_1442" x1="39.8909" y1="0" x2="39.8909" y2="226.686"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF0800"/>
                        <stop offset="1" stopColor="#09091A"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg className="mobile" style={{position: 'absolute', right: 0, top: -50,zIndex:-2}} xmlns="http://www.w3.org/2000/svg" width="138" height="259" viewBox="0 0 138 259" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M34.854 -1.20386e-05L34.5683 0.164929L0.285978 19.9579L0.000272899 20.1228L0.00027287 20.4527L0.000269409 60.0385L0.000269381 60.3684L0.285975 60.5333L34.2834 80.1618L34.2834 119.084L0.285968 138.712L0.000262517 138.877L0.000262488 139.207L0.000259028 178.793L0.000258999 179.123L0.285965 179.288L34.2834 198.916L34.2834 238.119L34.2834 238.449L34.5691 238.614L68.8514 258.407L69.1371 258.572L69.4228 258.407L103.421 238.778L137.42 258.407L137.705 258.572L137.991 258.407L172.273 238.614L172.559 238.449L172.559 238.119L172.559 198.534L172.559 198.204L172.273 198.039L138.274 178.409L138.274 139.49L172.273 119.86L172.559 119.695L172.559 119.365L172.559 79.7794L172.559 79.4495L172.273 79.2846L138.274 59.6551L138.274 20.4527L138.274 20.1228L137.988 19.9579L103.706 0.164941L103.42 -2.42362e-08L103.135 0.164941L69.1371 19.7934L35.1397 0.164929L34.854 -1.20386e-05ZM69.7093 178.411L103.421 197.875L137.131 178.412L137.131 139.537L103.42 120.074L69.7093 139.537L69.7093 178.411ZM34.8093 197.9L68.565 178.411L68.565 139.537L34.854 120.074L1.14302 139.537L1.14302 178.463L34.8093 197.9ZM102.848 198.915L102.848 237.79L69.1371 257.253L35.4261 237.79L35.4261 198.915L69.1371 179.452L102.848 198.915ZM103.994 198.914L137.749 179.426L171.416 198.863L171.416 237.79L137.705 257.253L103.994 237.79L103.994 198.914ZM69.7093 59.657L103.421 79.1207L137.131 59.6582L137.131 20.7826L103.42 1.31953L69.7093 20.7826L69.7093 59.657ZM34.8093 79.1459L68.565 59.6571L68.565 20.7826L34.854 1.31952L1.14303 20.7826L1.14303 59.7086L34.8093 79.1459ZM102.848 80.1609L102.848 119.035L69.1372 138.498L35.4262 119.035L35.4262 80.1609L69.1371 60.6979L102.848 80.1609ZM103.994 80.1598L137.749 60.6715L171.416 80.1093L171.416 119.035L137.705 138.498L103.994 119.035L103.994 80.1598Z"
                      fill="url(#paint0_linear_222_2909)"/>
                <defs>
                    <linearGradient id="paint0_linear_222_2909" x1="135.729" y1="189.092" x2="187.481" y2="10.6649"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#09091B"/>
                        <stop offset="1" stopColor="#FF0800"/>
                    </linearGradient>
                </defs>
            </svg>
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