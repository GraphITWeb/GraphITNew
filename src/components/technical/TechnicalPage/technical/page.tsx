import TechnicalMain from "@/components/technical/TechicalMain/TechnicalMain";
import './technical.css'
import Image from 'next/image';
import Illustration from "@/assets/Illustration2.png";
import TechnicalWhatBlock from "@/components/technical/TechnicalWhatBlock/TechnicalWhatBlock";
import ChooseUsBlock from "@/components/who-we-are/ChooseUsBlock/ChooseUsBlock";
import React from "react";
import Posts from "@/components/what-we-do/Posts/Posts";

export default function Technical() {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <TechnicalMain subText="Technical on Offering"
                           header="Access talent and innovation with global capability centers"
                           description="Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people around the world."/>
            <h2 className="technical__why__h2">Why global capability centers matter</h2>
            <div className="technical__why">
                <div>
                    <span className='orange__span'/>
                    <h2>90%</h2>
                    <p>
                        of CEOs globally report talent scarcity and a lack of relevant skills for the future of work in
                        the top five global challenge affecting their business
                    </p>
                </div>
                <div>
                    <span className='orange__span'/>
                    <h2>65%</h2>
                    <p>
                        of executives say hiring and retaining data professionals is difficult - but new skills are
                        needed
                    </p>
                </div>
                <div>
                    <span className='orange__span'/>
                    <h2>71%</h2>
                    <p>
                        of organisations are making moderate to significant investments to develop capability centres in
                        the next 12 months
                    </p>
                </div>
            </div>
            <div className="technical__access">
                <div>
                    <h3>Access the talent you need</h3>
                    <p>
                        Running a business with the right people, doing the right work in the right location helps keep
                        costs low and outcome high.
                    </p>
                </div>
                <Image src={Illustration} alt="illustration"/>
            </div>
            <div className="technical__what">
                <div>
                    <h2>
                        What you need to do
                    </h2>
                    <p style={{textAlign: "center", marginTop: 16}}>
                        We’d like to hear from you. Please fill out this form
                    </p>
                </div>
                <TechnicalWhatBlock header="Driving Positive Impact"
                                    description="We are dedicated to creating meaningful impact for our clients, our people, and the communities we serve. At Graphit, we believe in responsible leadership that drives progress, supports sustainability, and builds a better future for all."/>
                <TechnicalWhatBlock header="Commitment to Ethical Business"
                                    description="At Graphit, integrity is at the heart of everything we do. Our team is united by a commitment to doing what’s right, providing exceptional value for our clients while upholding the highest ethical standards. This dedication to ethical business practices is what sets us apart."/>
                <TechnicalWhatBlock header="Sustainability in Action"
                                    description="We partner with clients to integrate sustainability into their transformations, helping them achieve environmental, social, and governance (ESG) goals. Our own operations reflect this commitment, as we work to minimize our environmental footprint and contribute positively to society."/>
                <TechnicalWhatBlock header="Championing Diversity and Inclusion"
                                    description="We value diverse perspectives and experiences as essential drivers of innovation. By fostering an inclusive environment, we attract and empower individuals with unique insights, enabling us to deliver creative, effective solutions for our clients."/>
                <TechnicalWhatBlock header="Responsible AI"
                                    description="AI holds transformative potential, and with it comes responsibility. Graphit helps clients design, deploy, and manage AI in a way that builds trust, mitigates risks, and maximizes value—ensuring AI serves as a force for good."/>
            </div>
            <div className="why__choose__us">
                <h2>What you’ll achieve</h2>
                <sub>Hear what they say about Venture and why you should choose Venture</sub>
                <div style={{display: "flex", flexDirection: "row", width: '100%', gap: 32, marginTop: 32}}>
                    <ChooseUsBlock title="Accelerate transformation"
                                   description="Beyond reducing SG&A by 15-25%, today’s centers provide broad strategic support, increasing an organisation’s agility and resilience"
                                   svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                                 viewBox="0 0 25 24" fill="none">
                                       <path
                                           d="M21.6667 22H6.66667C4.36667 22 2.5 20.1333 2.5 17.8333V2.83333C2.5 2.375 2.875 2 3.33333 2C3.79167 2 4.16667 2.375 4.16667 2.83333V17.8333C4.16667 19.2083 5.29167 20.3333 6.66667 20.3333H21.6667C22.125 20.3333 22.5 20.7083 22.5 21.1667C22.5 21.625 22.125 22 21.6667 22ZM21.6667 4.91667C21.6667 3.30833 20.3583 2 18.75 2C17.1417 2 15.8333 3.30833 15.8333 4.91667C15.8333 6.525 17.1417 7.83333 18.75 7.83333C20.3583 7.83333 21.6667 6.525 21.6667 4.91667ZM20 4.91667C20 5.60833 19.4417 6.16667 18.75 6.16667C18.0583 6.16667 17.5 5.60833 17.5 4.91667C17.5 4.225 18.0583 3.66667 18.75 3.66667C19.4417 3.66667 20 4.225 20 4.91667ZM20.8333 13.25C20.8333 11.6417 19.525 10.3333 17.9167 10.3333C16.3083 10.3333 15 11.6417 15 13.25C15 14.8583 16.3083 16.1667 17.9167 16.1667C19.525 16.1667 20.8333 14.8583 20.8333 13.25ZM19.1667 13.25C19.1667 13.9417 18.6083 14.5 17.9167 14.5C17.225 14.5 16.6667 13.9417 16.6667 13.25C16.6667 12.5583 17.225 12 17.9167 12C18.6083 12 19.1667 12.5583 19.1667 13.25ZM13.3333 7.83333C13.3333 6.45833 12.2083 5.33333 10.8333 5.33333C9.45833 5.33333 8.33333 6.45833 8.33333 7.83333C8.33333 9.20833 9.45833 10.3333 10.8333 10.3333C12.2083 10.3333 13.3333 9.20833 13.3333 7.83333ZM12.5 15.3333C12.5 13.9583 11.375 12.8333 10 12.8333C8.625 12.8333 7.5 13.9583 7.5 15.3333C7.5 16.7083 8.625 17.8333 10 17.8333C11.375 17.8333 12.5 16.7083 12.5 15.3333Z"
                                           fill="#F23704"/>
                                   </svg>}/>
                    <ChooseUsBlock title="Unlock innovation"
                                   description="Companies are estimated to be able to free up 25% of R&D time, increasing their potential to develop new products and services"
                                   svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                                 viewBox="0 0 25 24" fill="none">
                                       <path
                                           d="M8.72256 19.4707V23H16.2781V19.6228C16.2596 18.8416 16.4128 18.0655 16.7274 17.3462C17.042 16.6269 17.5109 15.9808 18.1028 15.451C19.3947 14.3522 20.3131 12.8993 20.7371 11.2838C21.1611 9.66831 21.0706 7.96608 20.4777 6.40147C19.8848 4.83686 18.8172 3.48331 17.4157 2.51923C16.0142 1.55515 14.3445 1.02579 12.6268 1.00092C10.9091 0.976048 9.22389 1.45684 7.79337 2.37992C6.36285 3.30299 5.25414 4.62503 4.61338 6.17178C3.97262 7.71853 3.82989 9.41738 4.20399 11.0444C4.57809 12.6715 5.45147 14.1503 6.70901 15.2861C7.32498 15.8102 7.82202 16.4528 8.16863 17.1732C8.51525 17.8935 8.70387 18.6759 8.72256 19.4707ZM14.3892 21.1671H10.6115V19.4707C10.6115 19.4248 10.6048 19.379 10.6039 19.3341H14.4043C14.4043 19.4303 14.3892 19.5257 14.3892 19.6228V21.1671ZM5.9459 8.40518C6.0863 7.37706 6.48147 6.3973 7.09756 5.54985C7.71365 4.7024 8.53228 4.01252 9.48331 3.53933C10.4343 3.06613 11.4894 2.82373 12.5581 2.8329C13.6269 2.84206 14.6774 3.10252 15.6196 3.59195C16.5619 4.08138 17.3678 4.78519 17.9684 5.64308C18.5689 6.50097 18.9462 7.48735 19.0679 8.51772C19.1895 9.54808 19.0519 10.5917 18.6669 11.5592C18.2818 12.5266 17.6608 13.3891 16.8571 14.0726C15.8059 14.9859 15.0531 16.1778 14.6915 17.5012H13.4448V10.9172C13.9953 10.7284 14.4723 10.3791 14.8104 9.91709C15.1485 9.45512 15.3313 8.90307 15.3337 8.33645H13.4448C13.4448 8.57951 13.3453 8.81262 13.1682 8.98449C12.991 9.15636 12.7508 9.25292 12.5003 9.25292C12.2499 9.25292 12.0096 9.15636 11.8325 8.98449C11.6554 8.81262 11.5559 8.57951 11.5559 8.33645H9.66701C9.66943 8.90307 9.8522 9.45512 10.1903 9.91709C10.5284 10.3791 11.0054 10.7284 11.5559 10.9172V17.5012H10.3073C9.88139 16.1349 9.08251 14.9059 7.99534 13.9443C7.22046 13.2486 6.62967 12.382 6.27293 11.4178C5.9162 10.4537 5.80403 9.42031 5.9459 8.40518Z"
                                           fill="#F23704"/>
                                   </svg>}/>
                    <ChooseUsBlock title="Increase solutions"
                                   description="Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque vestibulum at eget quam vitae. Tristique pulvinar praesent eu aliquam ut tempus."
                                   svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                       <path d="M18.3327 12V17C18.3327 17.46 17.9594 17.8333 17.4994 17.8333C17.0394 17.8333 16.6661 17.46 16.6661 17V12C16.6661 11.54 17.0394 11.1667 17.4994 11.1667C17.9594 11.1667 18.3327 11.54 18.3327 12ZM12.1496 7.5975L14.7087 16.7883C14.8545 17.3133 14.4603 17.8333 13.9145 17.8333C13.5454 17.8333 13.2221 17.5883 13.1212 17.2333L12.5854 15.3333H8.24726L7.71145 17.2333C7.61145 17.5883 7.2873 17.8333 6.91815 17.8333C6.37317 17.8333 5.97819 17.3133 6.12402 16.7883L8.69974 7.53167C8.81724 7.025 9.15056 6.59833 9.6147 6.36083C10.088 6.1175 10.6313 6.1025 11.1471 6.31917C11.6363 6.52417 12.0113 7 12.1504 7.59833L12.1496 7.5975ZM12.1154 13.6667L10.508 7.97083C10.4838 7.87583 10.3488 7.87583 10.3255 7.97083L8.71807 13.6667H12.1154ZM21.6667 10.3333C21.2067 10.3333 20.8334 10.7067 20.8334 11.1667V17.8333C20.8334 19.2117 19.7118 20.3333 18.3335 20.3333H6.66649C5.28822 20.3333 4.1666 19.2117 4.1666 17.8333V6.16667C4.1666 4.78833 5.28822 3.66667 6.66649 3.66667H13.3329C13.7929 3.66667 14.1662 3.29333 14.1662 2.83333C14.1662 2.37333 13.7929 2 13.3329 2H6.66649C4.36909 2 2.5 3.86917 2.5 6.16667V17.8333C2.5 20.1308 4.36909 22 6.66649 22H18.3327C20.6301 22 22.4992 20.1308 22.4992 17.8333V11.1667C22.4992 10.7067 22.1258 10.3333 21.6659 10.3333H21.6667ZM15.9586 6.31667L17.5152 6.9725L18.136 8.52667C18.2702 8.86333 18.596 9.08333 18.9585 9.08333C19.321 9.08333 19.646 8.8625 19.7809 8.52667L20.3984 6.98167L21.9434 6.36417C22.28 6.23 22.5 5.90417 22.5 5.54167C22.5 5.17917 22.2792 4.85417 21.9434 4.71917L20.3984 4.10167L19.7809 2.55667C19.6451 2.22083 19.3193 2 18.9576 2C18.596 2 18.2702 2.22083 18.1352 2.55667L17.521 4.0925L15.9878 4.67333C15.6495 4.80167 15.4228 5.12333 15.4161 5.485C15.4095 5.8475 15.6245 6.17667 15.9578 6.3175L15.9586 6.31667Z" fill="#F23704"/>
                                   </svg>}/>
                </div>
            </div>
            <Posts/>
        </div>
    )
}