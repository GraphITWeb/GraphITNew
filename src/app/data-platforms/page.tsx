import React from 'react';
import Main from "@/components/Main/Main";
import Posts from "@/components/what-we-do/Posts/Posts";
import OfferingInfo from "@/components/offering/OfferingInfo/OfferingInfo";
import StepSVG from "@/components/offering/stepSvg";
import Business from "@/components/Home/Business/Business";
import DataPlatform from "@/components/UI/Sticky/DataPlatform";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <Main subText="Data Platforms" header="Unified Data, Amplified Insights"
                  description="Our leading Data Platform solutions bring together all your data to enable deeper insights, smarter decisions, more cohesive operations and prepare your business for AI adoption."/>
            <OfferingInfo
                header1={'70%'}
                header2={'2x'}
                header3={'80%'}
                header4={'$150B+'}
                text1={'Companies that invested in data platforms are 70% more prepared for AI rollout compared to its peers'}
                text2={'accelerated time-to-market for new insights and products compared to the competition'}
                text3={'Sustainable and resilient data infrastructure results in 80% more accurate and faster analytics'}
                text4={'in savings will be achieved by corporations globally from cloud-native data platform investments'}/>
            <DataPlatform/>
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
                        <h3>
                            Data Extraction
                        </h3>
                        <p>
                            texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                            texttexttexttexttexttexttexttexttexttexttext
                        </p>
                    </div>
                </div>
                <svg className="pc" style={{marginLeft: 15, width: '50vw'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 722 286"
                     fill="none">
                    <path
                        d="M1 1V155.912C1 162.54 6.37258 167.912 13 167.912H709C715.627 167.912 721 173.285 721 179.912V285"
                        stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div style={{marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <div>
                            <h3>Cloud-Native Storage
                            </h3>
                            <p>
                                texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                                texttexttexttexttexttexttexttexttexttexttext
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
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <h3>
                            Data Processing
                        </h3>
                        <p>
                            texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                            texttexttexttexttexttexttexttexttexttexttext
                        </p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
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
                        <h3>
                            Data Governance
                        </h3>
                        <p>
                            texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                            texttexttexttexttexttexttexttexttexttexttext
                        </p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
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
                        <h3>Advanced BI
                        </h3>
                        <p>
                            texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                            texttexttexttexttexttexttexttexttexttexttext
                        </p>
                    </div>
                </div>
                <svg className="mobile" style={{marginLeft: 15}} xmlns="http://www.w3.org/2000/svg" width="2"
                     height="66" viewBox="0 0 2 66"
                     fill="none">
                    <path d="M1 1L0.999997 65" stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <svg className="pc" style={{marginLeft: 15, width: '50vw',transform:'rotateY(-180deg)'}} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 722 262"
                     fill="none">
                    <path
                        d="M1 1L1 141.807C1 148.434 6.37258 153.807 13 153.807L709 153.807C715.627 153.807 721 159.18 721 165.807V261"
                        stroke="#F23704" strokeLinecap="round" strokeDasharray="6 6"/>
                </svg>
                <div style={{marginRight: 'auto'}}>
                    <StepSVG/>
                    <div>
                        <h3>
                            Data Quality Frameworks
                        </h3>
                        <p>
                            texttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                            texttexttexttexttexttexttexttexttexttexttext
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
