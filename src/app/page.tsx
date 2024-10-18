import './home.css'
import User from '../assets/user.png'
import Button from "@/components/UI/Button/Button";
import {Companies, FeedbackItem, Nextgen, Unlocked,CRM} from "@/components";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-items-center hero">
            <div className="get__started">
                <div className="get__started__innovate">
                    <h1>Innovate
                        <div>.</div>
                    </h1>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redefine
                        <div>.</div>
                    </h1>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transform
                        <div>.</div>
                    </h1>
                </div>
                <div className="get__started__info">
                    <div className="get__started__info_companies">
                        <p>Used and helping over more</p>
                        <p style={{fontWeight: 600, color: "white"}}>200+ Companies</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                stroke="white" stroke-miterlimit="10"/>
                            <path d="M2.92773 7.5H17.0734" stroke="white" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M2.92773 12.5H17.0734" stroke="white" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path
                                d="M10 17.2985C11.7259 17.2985 13.125 14.0308 13.125 9.99984C13.125 5.9689 11.7259 2.70117 10 2.70117C8.27411 2.70117 6.875 5.9689 6.875 9.99984C6.875 14.0308 8.27411 17.2985 10 17.2985Z"
                                stroke="white" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                    <p style={{marginBottom: 16}}>
                        Innovate by integrating advanced AI solutions that propel your business forward. Redefine the
                        status quo, turning complex data into clear insights and streamlined operations that push
                        boundaries. Transform your future by leveraging technology to optimize what exists and unlock
                        new opportunities. With AI, the future isn’t just envisioned—it’s built. the technology built
                        to empower you.
                    </p>
                    <Button label='Get Started' btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
                </div>
            </div>
            <Companies/>
            <CRM/>
            <Nextgen/>
            <Unlocked/>
            <div className="feedback">
                <div>
                    <h2>Used by More Than 10K+ Business</h2>
                    <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>Hear what they say about
                        Venture
                        and why you should choose Venture</sub>
                </div>
                <FeedbackItem imgUser={User} description="I was looking for a CRM that was easy to use and could adapt to my
                    business. This CRM has exceeded my expectations. It&#39;s simple, intuitive, and
                    customizable."/>
                <FeedbackItem imgUser={User} description="I was looking for a CRM that was easy to use and could adapt to my
                    business. This CRM has exceeded my expectations. It&#39;s simple, intuitive, and
                    customizable."/>
                <FeedbackItem imgUser={User} description="I was looking for a CRM that was easy to use and could adapt to my
                    business. This CRM has exceeded my expectations. It&#39;s simple, intuitive, and
                    customizable."/>
                <FeedbackItem imgUser={User} description="I was looking for a CRM that was easy to use and could adapt to my
                    business. This CRM has exceeded my expectations. It&#39;s simple, intuitive, and
                    customizable."/>
            </div>
            <div className="business">
                <div>
                    <h2>Take Your Business to the</h2>
                    <h2 style={{color: 'var(--orange)'}}>Next Level</h2>
                </div>
                <sub style={{color: 'white', marginBottom: 24}}>Contact</sub>
                <Button label='Get Started' btnStyle={{padding: '12px 114px'}} btnDivStyle={{fontSize: 18}}/>
            </div>
        </div>
    );
}
