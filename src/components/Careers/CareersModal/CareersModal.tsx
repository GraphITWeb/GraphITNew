'use client'
import './CareersModal.css';
import React, { useState} from "react";
import Input from "@/components/UI/Input/Input";
import TextArea from "@/components/UI/TextArea/TextArea";
import Button from "@/components/UI/Button/Button";
import {ICareer} from "@/interfaces/interfaces";
import Image from "next/image";
import flagImage from "@/assets/elements/british.png";
import emailjs from '@emailjs/browser';

interface CareersBlockProps {
    career: ICareer;
    setActiveCareers: (value: number | null) => void;
}

const CareersModal: React.FC<CareersBlockProps> = ({
                                                       career,
                                                       setActiveCareers
                                                   }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedName, setSelectedName] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                alert('Розмір файлу не повинен перевищувати 10 МБ');
                return;
            }
            setSelectedFile(file);
            setSelectedName(file.name);
        }
    };
    const handleSubmit = async (e: React.FormEvent) => {
        console.log('handleSubmit');
        try {
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('email', email);
            formData.append('phone', number);
            formData.append('linkedin', linkedin);
            formData.append('message', message);
            formData.append('file_name', selectedName);
            if (selectedFile) {
                formData.append('selectedFile', selectedFile);
            }

            const result = await emailjs.sendForm(
                'service_k41ppv9', // Замініть на ваш EmailJS service ID
                'template_an04hkp', // Замініть на ваш EmailJS template ID
                formData as unknown as HTMLFormElement,
                'Jy06b6xSZpfdujkkb' // Замініть на ваш EmailJS user ID
            );

            console.log(result.text);
            // Додайте повідомлення про успіх або скиньте форму тут
        } catch (error) {
            console.error('Помилка відправки email:', error);
            // Додайте обробку помилок тут
        }
    };

    return (
        <div className="careers__modal__background">
            <div className="careers__modal">
                <div className="careers__modal__header">
                    <h5>
                        {career.position} career
                    </h5>
                    <svg onClick={() => setActiveCareers(null)} style={{cursor: 'pointer'}}
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                            fill="white"/>
                    </svg>
                </div>
                <div className="careers__modal__content">
                    <div className="careers__modal__body">
                        <small className="flag pc"
                               style={career.direction==='Engineering'?{color: 'var(--white)',
                                   borderRadius:  100,
                                   border: '1px solid rgba(242, 55, 4, 0.30)',
                                   background: 'rgba(242, 55, 4, 0.20)',
                                   padding:'2px 12px'
                               }:{color: 'var(--white)',
                                   borderRadius:  100,
                                   border: '1px solid rgba(51, 138, 243, 0.30)',
                                   background: 'rgba(51, 138, 243, 0.20)',
                                   padding:'2px 12px'
                               }}>
                            {career.direction}
                        </small>
                        <h2>{career.position}</h2>
                        <div className="flex flex-row justify-start gap-2 mobile">
                            <small className="flag"  style={career.direction==='Engineering'?{color: 'var(--white)',
                                borderRadius:  100,
                                border: '1px solid rgba(242, 55, 4, 0.30)',
                                background: 'rgba(242, 55, 4, 0.20)',
                                padding:'2px 12px'
                            }:{color: 'var(--white)',
                                borderRadius:  100,
                                border: '1px solid rgba(51, 138, 243, 0.30)',
                                background: 'rgba(51, 138, 243, 0.20)',
                                padding:'2px 12px'
                            }}>
                                {career.direction}
                            </small>
                            <div className="flag">
                                {career.country==='United Kingdom'?
                                    <Image src={flagImage} alt="flag"/>
                                    :
                                    <svg style={{position: "relative", top: 0}} xmlns="http://www.w3.org/2000/svg"
                                         width="18"
                                         height="18" viewBox="0 0 20 20" fill="none">
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
                                    </svg>}
                                <small>{career.country}</small>
                            </div>
                        </div>
                        <p style={{marginTop: 16}}>
                            {career.shortDescription}
                        </p>
                        <div className="careers__modal__body__first">
                            <div className="careers__block__bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z"
                                        fill="#B3B3B3"/>
                                </svg>
                                <h6>
                                    {career.time}
                                </h6>
                            </div>
                            <div className="flag pc">
                                {career.country==='United Kingdom'?
                                    <Image src={flagImage} alt="flag"/>
                                    :
                                    <svg style={{position: "relative", top: 0}} xmlns="http://www.w3.org/2000/svg"
                                         width="18"
                                         height="18" viewBox="0 0 20 20" fill="none">
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
                                    </svg>}
                                <small>{career.country}</small>
                            </div>
                        </div>
                        <span className="modal__span"/>
                        <h4>Description</h4>
                        <p>{career.description}</p>
                        <h4>Responsibilities</h4>
                        <div>
                            {career.responsibilities.map((responsibility,index) =>
                                <div key={index} style={{display: "flex", flexDirection: "row", gap: 8}}>
                                    <p> &#9679;</p>
                                    <p>{responsibility}</p>
                                </div>
                            )}
                        </div>
                        <h4>Requirements</h4>
                        <div>
                            {career.requirements.map((requirement,index) =>
                                <div key={index} style={{display: "flex", flexDirection: "row", gap: 8}}>
                                    <p> &#9679;</p>
                                    <p>{requirement}</p>
                                </div>
                            )}
                        </div>
                        <h4>Preferred Qualifications</h4>
                        <div>
                            {career.qualifications.map((quality,index) =>
                                <div key={index} style={{display: "flex", flexDirection: "row", gap: 8}}>
                                    <p> &#9679;</p>
                                    <p>{quality}</p>
                                </div>
                            )}
                        </div>
                        <div className="careers__modal__graphit">
                            <h4 style={{marginTop: 0}}>About Graphit</h4>
                            <p>Graphit is a London-based tech-consulting driving next-gen AI transformations. Our solutions sit at the nexus of AI and Big Data to innovate, redefine, and transform business operations. We specialise in enabling corporate adaptability, helping organisations seamlessly integrate new technologies and unlock their potential for further growth. At Graphit, we go beyond technical execution by creating a powerful synergy between cutting-edge technology and a deep understanding of business needs - empowering corporations to embrace digital transformation and transition toward a smarter, AI-driven future.</p>
                        </div>
                    </div>
                    <div className="careers__modal__contact">
                        <h4>
                            Apply now
                        </h4>
                        <div className="careers__modal__contact__first">
                            <div>
                                <small>First name</small>
                                <Input placeholder='First name' setValue={setFirstName} value={firstName}/>
                            </div>
                            <div>
                                <small>Last name</small>
                                <Input placeholder='Last name' setValue={setLastName} value={lastName}/>
                            </div>
                        </div>
                        <div>
                            <small>Email</small>
                            <Input placeholder='you@gmail.com' setValue={setEmail} value={email}/>
                        </div>
                        <div>
                            <small>Phone number</small>
                            <Input placeholder='+44 (55) 0000 0000' setValue={setNumber} value={number}/>
                        </div>
                        <div>
                            <small>LinkedIn</small>
                            <Input placeholder='Your LinkedIn link' setValue={setLinkedin} value={linkedin}/>
                        </div>
                        <div>
                            <small>Message</small>
                            <TextArea resize={true} placeholder='Message' setValue={setMessage} value={message}/>
                        </div>
                        <div className="file__upload">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21"
                                 fill="none">
                                <path
                                    d="M13 14.25C13 15.9833 12.3917 17.4583 11.175 18.675C9.95833 19.8917 8.48333 20.5 6.75 20.5C5.01667 20.5 3.54167 19.8917 2.325 18.675C1.10833 17.4583 0.5 15.9833 0.5 14.25V5C0.5 3.75 0.9375 2.6875 1.8125 1.8125C2.6875 0.9375 3.75 0.5 5 0.5C6.25 0.5 7.3125 0.9375 8.1875 1.8125C9.0625 2.6875 9.5 3.75 9.5 5V13.75C9.5 14.5167 9.23333 15.1667 8.7 15.7C8.16667 16.2333 7.51667 16.5 6.75 16.5C5.98333 16.5 5.33333 16.2333 4.8 15.7C4.26667 15.1667 4 14.5167 4 13.75V4.5H6V13.75C6 13.9667 6.07083 14.1458 6.2125 14.2875C6.35417 14.4292 6.53333 14.5 6.75 14.5C6.96667 14.5 7.14583 14.4292 7.2875 14.2875C7.42917 14.1458 7.5 13.9667 7.5 13.75V5C7.48333 4.3 7.2375 3.70833 6.7625 3.225C6.2875 2.74167 5.7 2.5 5 2.5C4.3 2.5 3.70833 2.74167 3.225 3.225C2.74167 3.70833 2.5 4.3 2.5 5V14.25C2.48333 15.4333 2.89167 16.4375 3.725 17.2625C4.55833 18.0875 5.56667 18.5 6.75 18.5C7.91667 18.5 8.90833 18.0875 9.725 17.2625C10.5417 16.4375 10.9667 15.4333 11 14.25V4.5H13V14.25Z"
                                    fill="#B3B3B3"/>
                            </svg>
                            <div>
                                {selectedName !== "" ? <h6 style={{color: 'var(--white)'}}>{selectedName}</h6> :
                                    <>
                                        <h6 style={{color: 'var(--white)'}}>Attach your CV file</h6>
                                        <small>.docx, .pdf up to 10 MB</small>
                                    </>
                                }
                            </div>
                            <input
                                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={handleFileChange} type="file"/>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <Button type="submit" label='Apply' btnStyle={{width: '100%', padding: '12px 16px'}}
                                    btnDivStyle={{fontSize: 18, lineHeight: '24px', textAlign: 'center'}}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CareersModal