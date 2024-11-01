import TechnicalMain from "@/components/technical/TechicalMain/TechnicalMain";
import './technical.css'
import Image from 'next/image';
import Illustration from "@/assets/Illustration2.png";
import TechnicalWhatBlock from "@/components/technical/TechnicalWhatBlock/TechnicalWhatBlock";
import ChooseUsBlock from "@/components/who-we-are/ChooseUsBlock/ChooseUsBlock";
import React from "react";

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
                <TechnicalWhatBlock header="Focus first on talent"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
                <TechnicalWhatBlock header="Enable innovation"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
                <TechnicalWhatBlock header="Identify the optimal location"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
                <TechnicalWhatBlock header="Strengthen your digital core"
                                    description="The largest growth area in global capability centers is in research and development. Other growing areas include engineering, technology innovation, product design and development, marketing, supply chain and transformation."/>
            </div>
            <div className="why__choose__us">
                <h2>Why choose us</h2>
                <sub>Hear what they say about Venture and why you should choose Venture</sub>
                <div style={{display: "flex", flexDirection: "row", width: '100%', gap: 32, marginTop: 32}}>
                    <ChooseUsBlock title="Specialized boutique service"
                                   description="Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque vestibulum at eget quam vitae. Tristique pulvinar praesent eu aliquam ut tempus."
                                   svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                                 viewBox="0 0 25 24" fill="none">
                                       <path
                                           d="M14.6677 19.7498C14.4178 19.9381 14.152 20.1365 13.9262 20.3332H15.8342C16.0552 20.3332 16.2671 20.421 16.4234 20.5773C16.5797 20.7336 16.6674 20.9455 16.6674 21.1666C16.6674 21.3876 16.5797 21.5996 16.4234 21.7559C16.2671 21.9122 16.0552 22 15.8342 22H12.5013C12.2804 22 12.0684 21.9122 11.9122 21.7559C11.7559 21.5996 11.6681 21.3876 11.6681 21.1666C11.6681 19.9165 12.7305 19.1197 13.6679 18.4163C14.2928 17.9479 15.001 17.4162 15.001 16.9995C15.001 16.7785 14.9132 16.5665 14.757 16.4102C14.6007 16.2539 14.3888 16.1661 14.1678 16.1661C13.9468 16.1661 13.7349 16.2539 13.5786 16.4102C13.4223 16.5665 13.3346 16.7785 13.3346 16.9995C13.3346 17.2205 13.2468 17.4325 13.0905 17.5888C12.9343 17.7451 12.7223 17.8329 12.5013 17.8329C12.2804 17.8329 12.0684 17.7451 11.9122 17.5888C11.7559 17.4325 11.6681 17.2205 11.6681 16.9995C11.6681 16.3364 11.9315 15.7004 12.4003 15.2316C12.869 14.7627 13.5048 14.4993 14.1678 14.4993C14.8307 14.4993 15.4665 14.7627 15.9353 15.2316C16.4041 15.7004 16.6674 16.3364 16.6674 16.9995C16.6674 18.2496 15.6051 19.0464 14.6677 19.7498ZM21.6668 14.4993C21.4458 14.4993 21.2339 14.5871 21.0776 14.7434C20.9213 14.8996 20.8336 15.1116 20.8336 15.3327V17.8329H20.0003C19.7794 17.8329 19.5674 17.7451 19.4112 17.5888C19.2549 17.4325 19.1671 17.2205 19.1671 16.9995V15.3327C19.1671 15.1116 19.0793 14.8996 18.9231 14.7434C18.7668 14.5871 18.5549 14.4993 18.3339 14.4993C18.1129 14.4993 17.901 14.5871 17.7447 14.7434C17.5885 14.8996 17.5007 15.1116 17.5007 15.3327V16.9995C17.5007 17.6626 17.764 18.2986 18.2328 18.7674C18.7016 19.2363 19.3374 19.4998 20.0003 19.4998H20.8336V21.1666C20.8336 21.3876 20.9213 21.5996 21.0776 21.7559C21.2339 21.9122 21.4458 22 21.6668 22C21.8878 22 22.0997 21.9122 22.256 21.7559C22.4122 21.5996 22.5 21.3876 22.5 21.1666V15.3327C22.5 15.1116 22.4122 14.8996 22.256 14.7434C22.0997 14.5871 21.8878 14.4993 21.6668 14.4993ZM13.3346 11.999V7.83192C13.3346 7.61088 13.2468 7.3989 13.0905 7.24261C12.9343 7.08631 12.7223 6.9985 12.5013 6.9985C12.2804 6.9985 12.0684 7.08631 11.9122 7.24261C11.7559 7.3989 11.6681 7.61088 11.6681 7.83192V11.1656H9.16846C8.94747 11.1656 8.73554 11.2534 8.57928 11.4097C8.42302 11.566 8.33523 11.778 8.33523 11.999C8.33523 12.22 8.42302 12.432 8.57928 12.5883C8.73554 12.7446 8.94747 12.8324 9.16846 12.8324H12.5013C12.7223 12.8324 12.9343 12.7446 13.0905 12.5883C13.2468 12.432 13.3346 12.22 13.3346 11.999ZM21.6668 3.66484C21.4458 3.66484 21.2339 3.75264 21.0776 3.90894C20.9213 4.06524 20.8336 4.27722 20.8336 4.49826V6.47679C19.9654 5.1663 18.8006 4.07898 17.4337 3.30306C16.0667 2.52713 14.5362 2.08445 12.9662 2.01094C11.3962 1.93743 9.831 2.23516 8.39758 2.87996C6.96417 3.52477 5.70291 4.4985 4.71615 5.72213C3.72939 6.94576 3.04493 8.38484 2.7183 9.9226C2.39167 11.4604 2.43207 13.0535 2.83622 14.5727C3.24037 16.0919 3.9969 17.4944 5.04441 18.6664C6.09192 19.8385 7.4009 20.747 8.86516 21.3183C8.96193 21.3556 9.06474 21.3748 9.16846 21.3749C9.3629 21.3752 9.55132 21.3075 9.70109 21.1835C9.85086 21.0595 9.95256 20.887 9.98856 20.6958C10.0246 20.5047 9.9926 20.307 9.89822 20.137C9.80383 19.9669 9.65297 19.8353 9.47175 19.7648C8.2286 19.284 7.11891 18.5119 6.23584 17.5133C5.35276 16.5148 4.72206 15.3189 4.39669 14.026C4.07131 12.7332 4.06076 11.3812 4.36591 10.0834C4.67106 8.78568 5.28302 7.58009 6.1504 6.56786C7.01778 5.55563 8.11528 4.7663 9.35077 4.26613C10.5863 3.76596 11.9237 3.56955 13.2508 3.69338C14.5779 3.81721 15.8559 4.25768 16.9775 4.9778C18.0992 5.69792 19.0318 6.67668 19.697 7.83192H17.5007C17.2797 7.83192 17.0678 7.91973 16.9115 8.07602C16.7552 8.23232 16.6674 8.4443 16.6674 8.66534C16.6674 8.88637 16.7552 9.09836 16.9115 9.25465C17.0678 9.41095 17.2797 9.49875 17.5007 9.49875H20.0003C20.6633 9.49875 21.2991 9.23534 21.7679 8.76645C22.2366 8.29756 22.5 7.66161 22.5 6.9985V4.49826C22.5 4.27722 22.4122 4.06524 22.256 3.90894C22.0997 3.75264 21.8878 3.66484 21.6668 3.66484Z"
                                           fill="#F23704"/>
                                   </svg>}/>
                    <ChooseUsBlock title="Cutting-edge tech adoption"
                                   description="Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque vestibulum at eget quam vitae. Tristique pulvinar praesent eu aliquam ut tempus."
                                   svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                                 viewBox="0 0 25 24" fill="none">
                                       <path
                                           d="M15.8333 7.83333H9.16667C8.70833 7.83333 8.33333 8.20833 8.33333 8.66667V15.3333C8.33333 15.7917 8.70833 16.1667 9.16667 16.1667H15.8333C16.2917 16.1667 16.6667 15.7917 16.6667 15.3333V8.66667C16.6667 8.20833 16.2917 7.83333 15.8333 7.83333ZM15 14.5H10V9.5H15V14.5ZM21.6667 11.1667C22.125 11.1667 22.5 10.7917 22.5 10.3333C22.5 9.875 22.125 9.5 21.6667 9.5H20.8333V7.83333H21.6667C22.125 7.83333 22.5 7.45833 22.5 7C22.5 6.54167 22.125 6.16667 21.6667 6.16667H20.4833C20.0667 5.20833 19.2917 4.44167 18.3333 4.01667V2.83333C18.3333 2.375 17.9583 2 17.5 2C17.0417 2 16.6667 2.375 16.6667 2.83333V3.66667H15V2.83333C15 2.375 14.625 2 14.1667 2C13.7083 2 13.3333 2.375 13.3333 2.83333V3.66667H11.6667V2.83333C11.6667 2.375 11.2917 2 10.8333 2C10.375 2 10 2.375 10 2.83333V3.66667H8.33333V2.83333C8.33333 2.375 7.95833 2 7.5 2C7.04167 2 6.66667 2.375 6.66667 2.83333V4.01667C5.70833 4.43333 4.94167 5.20833 4.51667 6.16667H3.33333C2.875 6.16667 2.5 6.54167 2.5 7C2.5 7.45833 2.875 7.83333 3.33333 7.83333H4.16667V9.5H3.33333C2.875 9.5 2.5 9.875 2.5 10.3333C2.5 10.7917 2.875 11.1667 3.33333 11.1667H4.16667V12.8333H3.33333C2.875 12.8333 2.5 13.2083 2.5 13.6667C2.5 14.125 2.875 14.5 3.33333 14.5H4.16667V16.1667H3.33333C2.875 16.1667 2.5 16.5417 2.5 17C2.5 17.4583 2.875 17.8333 3.33333 17.8333H4.51667C4.93333 18.7917 5.70833 19.5583 6.66667 19.9833V21.1667C6.66667 21.625 7.04167 22 7.5 22C7.95833 22 8.33333 21.625 8.33333 21.1667V20.3333H10V21.1667C10 21.625 10.375 22 10.8333 22C11.2917 22 11.6667 21.625 11.6667 21.1667V20.3333H13.3333V21.1667C13.3333 21.625 13.7083 22 14.1667 22C14.625 22 15 21.625 15 21.1667V20.3333H16.6667V21.1667C16.6667 21.625 17.0417 22 17.5 22C17.9583 22 18.3333 21.625 18.3333 21.1667V19.9833C19.2917 19.5667 20.0583 18.7917 20.4833 17.8333H21.6667C22.125 17.8333 22.5 17.4583 22.5 17C22.5 16.5417 22.125 16.1667 21.6667 16.1667H20.8333V14.5H21.6667C22.125 14.5 22.5 14.125 22.5 13.6667C22.5 13.2083 22.125 12.8333 21.6667 12.8333H20.8333V11.1667H21.6667ZM16.6667 18.6667H8.33333C6.95833 18.6667 5.83333 17.5417 5.83333 16.1667V7.83333C5.83333 6.45833 6.95833 5.33333 8.33333 5.33333H16.6667C18.0417 5.33333 19.1667 6.45833 19.1667 7.83333V16.1667C19.1667 17.5417 18.0417 18.6667 16.6667 18.6667Z"
                                           fill="#F23704"/>
                                   </svg>}/>
                    <ChooseUsBlock title="Tailored solutions"
                                   description="Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque vestibulum at eget quam vitae. Tristique pulvinar praesent eu aliquam ut tempus."
                                   svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                                 viewBox="0 0 25 24" fill="none">
                                       <path
                                           d="M17.8289 3.90378C16.1329 2.48368 13.8556 1.80697 11.5729 2.04782C7.97112 2.42951 5.02534 5.15053 4.56756 8.51742C4.23512 10.9601 5.14001 13.3177 7.05023 14.9854C8.27245 16.0513 8.94534 17.4022 8.94534 18.7906V18.9248C8.94534 20.6207 10.4164 22 12.2253 22H12.7756C14.5844 22 16.0556 20.6207 16.0556 18.9248V18.4673C16.0556 17.2288 16.6662 16.0454 17.7729 15.1354C19.5062 13.7119 20.5 11.6576 20.5 9.49915C20.5 7.36568 19.5267 5.32637 17.8289 3.90378ZM12.7756 20.3332H12.2253C11.3969 20.3332 10.7231 19.7015 10.7231 18.9248V18.7906C10.7231 18.7489 10.7222 18.7073 10.7213 18.6664H14.2787V18.9248C14.2787 19.7015 13.604 20.3332 12.7764 20.3332H12.7756ZM16.6013 13.882C15.5551 14.742 14.8253 15.8321 14.4893 16.9997H10.4467C10.0733 15.8071 9.32845 14.6953 8.26178 13.7653C6.77645 12.4685 6.07245 10.6326 6.33201 8.7291C6.68667 6.11392 8.97556 4.00128 11.7729 3.7046C12.02 3.67876 12.2653 3.66543 12.5089 3.66543C14.0422 3.66543 15.4893 4.17963 16.644 5.14719C17.9649 6.25393 18.7231 7.83987 18.7231 9.49915C18.7231 11.1768 17.9498 12.7744 16.6013 13.882ZM16.0564 11.9993C16.0564 13.3777 14.86 14.4995 13.3898 14.4995V15.3329C13.3898 15.7929 12.9924 16.1663 12.5009 16.1663C12.0093 16.1663 11.612 15.7929 11.612 15.3329V14.4995H11.3738C10.4253 14.4995 9.54001 14.0211 9.06445 13.2502C8.81823 12.8519 8.96401 12.3427 9.38801 12.1118C9.81378 11.8801 10.3569 12.0177 10.6022 12.416C10.7613 12.6727 11.0564 12.8327 11.3729 12.8327H13.3889C13.8796 12.8327 14.2778 12.4585 14.2778 11.9993C14.2778 11.6843 14.0369 11.4176 13.7053 11.3659L11.0022 10.9434C9.80934 10.7576 8.94445 9.79917 8.94445 8.66576C8.94445 7.28734 10.1409 6.16559 11.6111 6.16559V5.33221C11.6111 4.87217 12.0084 4.49882 12.5 4.49882C12.9916 4.49882 13.3889 4.87217 13.3889 5.33221V6.16559H13.6271C14.5756 6.16559 15.4609 6.64479 15.9364 7.41568C16.1827 7.81404 16.0369 8.32324 15.6129 8.55409C15.1862 8.78411 14.6431 8.64826 14.3987 8.2499C14.2396 7.99239 13.9444 7.83321 13.628 7.83321H11.612C11.1213 7.83321 10.7231 8.2074 10.7231 8.6666C10.7231 8.98162 10.964 9.2483 11.2956 9.29997L13.9987 9.7225C15.1916 9.90835 16.0564 10.8667 16.0564 12.0002V11.9993Z"
                                           fill="#F23704"/>
                                   </svg>}/>
                </div>
            </div>
        </div>
    )
}