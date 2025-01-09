import './home.css'
import Business from "@/components/Home/Business/Business";
import Companies from "@/components/Home/Companies/Companies";
import CRM from "@/components/Home/CRM/CRM";
import Nextgen from "@/components/Home/Nextgen/Nextgen";
import Unlocked from "@/components/Home/Unlocked/Unlocked";
import React from "react";
import FeedbackBlock from "@/components/Home/FeedbackBlock/FeedbackBlock";
import Button from "@/components/UI/Button/Button";

export default function HomePage() {
    return (
        <>
            <div className="loading-animation">
                <div
                    className="animate__to"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width={196} height={227} viewBox="0 0 196 227"
                     className="nav__logo__svg"
                     fill="none">
                    <g clipPath="url(#clip0_1870_11639)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M25.8073 71.9592V185.028L0 170.148V57.0795L51.8113 27.2042L77.6256 42.1025L25.8073 71.9592Z"
                              fill="#FF0900"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M100.82 30.7996H100.799L73.1934 14.8823L99.0044 0L134.884 20.6764L159.836 35.0556L159.839 35.0569L195.718 55.7526V115.807L169.889 130.692V70.615L100.82 30.7996Z"
                              fill="#FF0900"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M159.838 190.886L159.836 190.887L133.789 205.909L97.9115 226.604L62.0336 205.909L47.1904 197.366V167.565L98 196.449L195.717 140.444V170.21L159.838 190.886Z"
                              fill="#FF0900"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M97.8281 142.625L72.499 128.018V98.8004L97.8281 84.1746L123.177 98.8011V128.017L97.8281 142.625Z"
                              fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1870_11639">
                            <rect width="196" height="227" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col items-center justify-items-center relative">
                    <svg className="mobile get__started__svg"  xmlns="http://www.w3.org/2000/svg" width="375" height="258" viewBox="0 0 375 258" fill="none">
                        <path
                            d="M19.2805 138.855L53.4868 119.106V79.6085L19.2805 59.8595L-14.9258 79.6085L-14.9258 119.106L19.2805 138.855Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M87.6916 138.855L121.898 119.106V79.6085L87.6916 59.8595L53.4854 79.6085L53.4854 119.106L87.6916 138.855Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M156.104 138.855L190.31 119.106V79.6085L156.104 59.8595L121.897 79.6085V119.106L156.104 138.855Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M292.93 257.342L327.136 237.593V198.095L292.93 178.346L258.724 198.095V237.593L292.93 257.342Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M292.93 138.855L327.136 119.106V79.6085L292.93 59.8595L258.724 79.6085V119.106L292.93 138.855Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M361.342 257.342L395.548 237.593V198.095L361.342 178.346L327.136 198.095V237.593L361.342 257.342Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M361.342 138.855L395.548 119.106V79.6085L361.342 59.8595L327.136 79.6085V119.106L361.342 138.855Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M-14.9295 198.156L19.2768 178.407V138.909L-14.9295 119.16L-49.1357 138.909L-49.1357 178.407L-14.9295 198.156Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M121.898 198.156L156.104 178.407V138.909L121.898 119.16L87.6914 138.909V178.407L121.898 198.156Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M190.308 198.156L224.514 178.407V138.909L190.308 119.16L156.102 138.909V178.407L190.308 198.156Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M258.721 198.156L292.927 178.407V138.909L258.721 119.16L224.515 138.909V178.407L258.721 198.156Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M327.136 198.156L361.342 178.407V138.909L327.136 119.16L292.93 138.909V178.407L327.136 198.156Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M-14.9295 79.6553L19.2768 59.9063V20.4083L-14.9295 0.659265L-49.1357 20.4083L-49.1357 59.9063L-14.9295 79.6553Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M53.4875 79.6553L87.6938 59.9063V20.4083L53.4875 0.659265L19.2812 20.4083L19.2812 59.9063L53.4875 79.6553Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                        <path
                            d="M258.721 79.6553L292.927 59.9063V20.4083L258.721 0.659265L224.515 20.4083V59.9063L258.721 79.6553Z"
                            stroke="#FF0800" strokeWidth="1.14021"/>
                    </svg>
                    <svg
                        style={{left: 0, top: 30, maxWidth: 'Calc(90vw - 160px)'}}
                        className="pc get__started__svg" xmlns="http://www.w3.org/2000/svg" width="754" height="419"
                        viewBox="0 0 754 419" fill="none">
                        <path
                            d="M31.877 417.354L87.3537 385.325V321.266L31.877 289.237L-23.5996 321.266L-23.5996 385.325L31.877 417.354Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M142.834 225.183L198.311 193.153V129.094L142.834 97.0648L87.3574 129.094V193.153L142.834 225.183Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M253.785 225.183L309.262 193.153V129.094L253.785 97.0648L198.309 129.094V193.153L253.785 225.183Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M364.736 225.183L420.213 193.153V129.094L364.736 97.0648L309.26 129.094V193.153L364.736 225.183Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M586.644 417.354L642.121 385.325V321.266L586.644 289.237L531.167 321.266V385.325L586.644 417.354Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M586.644 225.183L642.121 193.153V129.094L586.644 97.0648L531.167 129.094V193.153L586.644 225.183Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M697.599 417.354L753.075 385.325V321.266L697.599 289.237L642.122 321.266V385.325L697.599 417.354Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M697.599 225.183L753.075 193.153V129.094L697.599 97.0648L642.122 129.094V193.153L697.599 225.183Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M87.3526 321.36L142.829 289.331V225.272L87.3526 193.243L31.876 225.272L31.876 289.331L87.3526 321.36Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M309.259 321.36L364.736 289.331V225.272L309.259 193.243L253.783 225.272V289.331L309.259 321.36Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M420.211 321.36L475.687 289.331V225.272L420.211 193.243L364.734 225.272V289.331L420.211 321.36Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M531.166 321.36L586.643 289.331V225.272L531.166 193.243L475.689 225.272V289.331L531.166 321.36Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M642.123 321.36L697.599 289.331V225.272L642.123 193.243L586.646 225.272V289.331L642.123 321.36Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M-23.5985 129.184L31.8781 97.1541V33.0952L-23.5985 1.06577L-79.0752 33.0952V97.1541L-23.5985 129.184Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M87.3526 129.184L142.829 97.1541V33.0952L87.3526 1.06577L31.876 33.0952L31.876 97.1541L87.3526 129.184Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M198.31 129.184L253.786 97.1541V33.0952L198.31 1.06577L142.833 33.0952V97.1541L198.31 129.184Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                        <path
                            d="M531.166 129.184L586.643 97.1541V33.0952L531.166 1.06577L475.689 33.0952V97.1541L531.166 129.184Z"
                            stroke="#FF0800" strokeWidth="1.84922"/>
                    </svg>
                    <svg
                        style={{right: 0, top: '70vh', maxWidth: 'Calc(90vw - 160px)'}}
                        className="pc get__started__svg"
                        xmlns="http://www.w3.org/2000/svg" width="210" height="227" viewBox="0 0 210 227" fill="none">
                        <path
                            d="M112.095 1.06934L167.68 33.1614V97.3455L112.095 129.438L56.5098 97.3455V33.1614L112.095 1.06934Z"
                            stroke="#FF0800" strokeWidth="1.85284"/>
                        <path
                            d="M223.271 1.06934L278.856 33.1614V97.3455L223.271 129.438L167.686 97.3455V33.1614L223.271 1.06934Z"
                            stroke="#FF0800" strokeWidth="1.85284"/>
                        <path
                            d="M56.5118 97.248L112.097 129.34V193.524L56.5118 225.616L0.926758 193.524V129.34L56.5118 97.248Z"
                            stroke="#FF0800" strokeWidth="1.85284"/>
                        <path
                            d="M167.679 97.248L223.264 129.34V193.524L167.679 225.616L112.094 193.524V129.34L167.679 97.248Z"
                            stroke="#FF0800" strokeWidth="1.85284"/>
                    </svg>
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
                                <p>Join leading companies in pursuit of</p>
                                <p style={{fontWeight: 600, color: "white"}}>change.</p>
                                <svg style={{position: "relative", top: 0}} xmlns="http://www.w3.org/2000/svg"
                                     width="20"
                                     height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                        stroke="white" strokeMiterlimit="10"/>
                                    <path d="M2.92773 7.5H17.0734" stroke="white" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M2.92773 12.5H17.0734" stroke="white" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path
                                        d="M10 17.2985C11.7259 17.2985 13.125 14.0308 13.125 9.99984C13.125 5.9689 11.7259 2.70117 10 2.70117C8.27411 2.70117 6.875 5.9689 6.875 9.99984C6.875 14.0308 8.27411 17.2985 10 17.2985Z"
                                        stroke="white" strokeMiterlimit="10"/>
                                </svg>
                            </div>
                            <p style={{marginBottom: 16, textAlign: "justify"}}>
                                The future belongs to those who innovate. At Graphit, we turn ambition into action,
                                empowering organizations to lead with advanced AI and data-driven insights. We blend
                                deep
                                technical expertise with bold strategy, building transformative solutions that shape
                                next-gen enterprises. From revolutionizing decision-making to creating seamless user
                                experiences, our AI and data solutions enable organizations to break boundaries and
                                drive
                                impact at scale. We are strategists, engineers, and innovators dedicated to solving the
                                world’s toughest challenges. We are Graphit. </p>
                            <Button href='/what-we-do' label='See what we do'
                                    btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
                        </div>
                    </div>
                    <CRM/>
                    <Companies/>
                    <Nextgen/>
                    <Unlocked/>
                    <FeedbackBlock/>
                    <Business/>
            </div>
        </>
);
}
