import React from 'react';
import Main from "@/components/Main/Main";
import Posts from "@/components/what-we-do/Posts/Posts";
import OfferingInfo from "@/components/offering/OfferingInfo/OfferingInfo";
import './nextgen.css'
import StepSVG from "@/components/offering/stepSvg";
import Copilots from "@/components/AICopilots/Copilots/Copilots";
import Business from "@/components/Home/Business/Business";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Offerings" header="Empower Your Platform with Data Platforms Solutions"
                  description="Together with you, we develop and deploy custom Data Platforms that integrate seamlessly into your platforms, empowering your end-users to access insights, make informed decisions, and unlock new possibilities through intuitive, conversational AI."/>
            <OfferingInfo
                header1={'80%'}
                header2={'2x'}
                header3={'25%'}
                header4={'3x'}
                text1={'of users prefer conversational interfaces for accessing data and insights.\n'}
                text2={'Platforms with embedded AI assistants see 2x higher user engagement and satisfaction.'}
                text3={'Personalized AI tools improve retention rates, reducing churn by up to 25%.\n'}
                text4={'Companies that prioritize user-friendly AI integrations are 3x more likely to achieve platform growth.'}/>
            <Copilots/>
            <div className="textPadding">
                <h2>
                    Redefine your platform with
                    <span> Data Platform</span>
                </h2>
            </div>
            <div className="reinvent">
                <div className="fade__reinvent"/>
                <svg className="pc" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2" height="177"
                     viewBox="0 0 2 177" fill="none">
                    <path d="M1 1L1.00001 176" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="100" viewBox="0 0 2 100" fill="none">
                    <path d="M1 1L1 99" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div>
                    <StepSVG/>
                    <div>
                        <h3>Design the Vision
                        </h3>
                        <p>
                            We work with you to explore how an AI Copilot can transform your platform, creating a vision
                            for a seamless, intuitive user experience.</p>
                    </div>
                </div>
                <svg className="pc" style={{marginLeft: 15, width: '50vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 722 286"
                     fill="none">
                    <path
                        d="M1 1V155.912C1 162.54 6.37258 167.912 13 167.912H709C715.627 167.912 721 173.285 721 179.912V285"
                        stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2" height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div style={{marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <div>
                            <h3>Develop Custom Solutions
                            </h3>
                            <p>
                                Leveraging your platform’s data and goals, we design and build a Copilot that delivers
                                personalized insights and enhances end-user productivity.
                            </p>
                        </div>
                    </div>
                </div>
                <svg className="pc" style={{marginLeft: 'auto', marginRight: 'Calc(50vw - 175px)', width: '25vw'}}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 274" fill="none">
                    <path
                        d="M1 273L1 125.14C1 118.513 6.37258 113.14 13 113.14L349 113.14C355.627 113.14 361 107.768 361 101.14L361 1"
                        stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2" height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <h3>Pilot the Experience
                        </h3>
                        <p>
                            We develop and test pilot implementations of the AI Copilot, ensuring it provides meaningful
                            value and aligns with user expectations.
                        </p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2" height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="pc" style={{marginLeft: 15, width: '25vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 362 274"
                     fill="none">
                    <path
                        d="M1 273L1 125.14C1 118.513 6.37258 113.14 13 113.14L349 113.14C355.627 113.14 361 107.768 361 101.14L361 1"
                        stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div>
                    <StepSVG/>
                    <div>
                        <h3>Scale for Impact
                        </h3>
                        <p>
                            Once validated, we scale the Copilot across your platform, optimizing features, ensuring
                            compliance, and delivering a consistently excellent user experience.
                        </p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2" height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="pc" style={{marginLeft: 15, width: '50vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 722 262"
                     fill="none">
                    <path
                        d="M1 1L1 141.807C1 148.434 6.37258 153.807 13 153.807L709 153.807C715.627 153.807 721 159.18 721 165.807V261"
                        stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div style={{marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <h3>Embed Long-Term Innovation
                        </h3>
                        <p>
                            We provide ongoing support and refinement, ensuring your AI Copilot evolves with your
                            platform and continues to meet the needs of your users.
                            Whether they’re analyzing data, making decisions, or exploring new opportunities, your
                            Copilot transforms the way they engage with your product.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: 96}}/>
            <Posts/>
            <Business/>
        </div>
    )
}
