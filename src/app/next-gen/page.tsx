import React from 'react';
import Main from "@/components/Main/Main";
import Posts from "@/components/what-we-do/Posts/Posts";
import OfferingInfo from "@/components/offering/OfferingInfo/OfferingInfo";
import './nextgen.css'
import StepSVG from "@/components/NextGen/stepSvg";
import Transform from "@/components/NextGen/Transform/Transform";
import Business from "@/components/Home/Business/Business";

export default function Page() {

    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Offerings" header="Take the world by Next-Gen AI Transformation"
                  description="Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people around the world."/>
            <OfferingInfo
                header1={'85%'}
                header2={'9%'}
                header3={'3x'}
                header4={'$500B+'}
                text1={'of executives believe AI will fundamentally change their businesses within the next five years.'}
                text2={'of companies are in the late stage of AI integration into their operations, leaving vast opportunities untapped.'}
                text3={'Organizations leveraging AI at scale are 3× more likely to outperform their peers in revenue growth.'}
                text4={'in projected global spending on AI technologies in the coming years.'}/>
            <Transform/>
            <div className="textPadding">
                <h2>Redefine with <span>Next-Gen AI Transformation</span>
                </h2>
            </div>
            <div className="reinvent">
                <div className="fade__reinvent"/>
                <svg className="pc" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2" height="177"
                     viewBox="0 0 2 177" fill="none">
                    <path d="M1 1L1.00001 176" stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="100" viewBox="0 0 2 100" fill="none">
                    <path d="M1 1L1 99" stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <div>
                    <StepSVG/>
                    <div>
                        <h3>Envision the Future</h3>
                        <p>We collaborate with you to explore what’s possible with AI, setting an inspiring vision that
                            garners support across your organization.</p>
                    </div>
                </div>
                <svg className="pc" style={{marginLeft: 15, width: '50vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 722 286"
                     fill="none">
                    <path
                        d="M1 1V155.912C1 162.54 6.37258 167.912 13 167.912H709C715.627 167.912 721 173.285 721 179.912V285"
                        stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <div style={{marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <div>
                            <h3>Strategize for Success</h3>
                            <p>With a comprehensive understanding of your current capabilities and strategic goals, we
                                build
                                the business case for AI transformation and develop a roadmap to achieve it.</p>
                        </div>
                    </div>
                </div>
                <svg className="pc" style={{marginLeft: 'auto', marginRight: 'Calc(50vw - 175px)', width: '25vw'}}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 274" fill="none">
                    <path
                        d="M1 273L1 125.14C1 118.513 6.37258 113.14 13 113.14L349 113.14C355.627 113.14 361 107.768 361 101.14L361 1"
                        stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <h3>Accelerate and Scale</h3>
                        <p>We rapidly scale AI applications enterprise-wide, evolving tech stacks, ensuring responsible
                            AI practices, and upskilling your teams through customized learning programs.</p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <svg className="pc" style={{marginLeft: 15, width: '25vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 362 274"
                     fill="none">
                    <path
                        d="M1 273L1 125.14C1 118.513 6.37258 113.14 13 113.14L349 113.14C355.627 113.14 361 107.768 361 101.14L361 1"
                        stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <div>
                    <StepSVG/>
                    <div>
                        <h3>Launch Your Journey</h3>
                        <p>We initiate your AI transformation by developing pilot models, building core data pipelines,
                            and addressing risks and biases while measuring value. This strong foundation prepares you
                            for scaling and adoption across the organisation.
                        </p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <svg className="pc" style={{marginLeft: 15, width: '50vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 722 262"
                     fill="none">
                    <path
                        d="M1 1L1 141.807C1 148.434 6.37258 153.807 13 153.807L709 153.807C715.627 153.807 721 159.18 721 165.807V261"
                        stroke="#F23704" stroke-linecap="round" stroke-dasharray="6 6"/>
                </svg>
                <div style={{marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <h3>Sustain Lasting Change</h3>
                        <p>We establish sustainable capabilities alongside technological solutions, equipping your
                            organization with the tools and expertise to continue innovating. Our approach embeds new
                            insights, processes, and ways of working, paving the way for ongoing transformation.</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: 96}}/>
            <Posts/>
            <Business/>
        </div>
    )
}
