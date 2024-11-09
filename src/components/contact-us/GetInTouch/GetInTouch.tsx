'use client'
import './GetInTouch.css'
import Input from "@/components/Input/Input";
import {useState} from "react";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button/Button";
const GetInTouch = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    return(
        <div className="GetInTouch">
            <h2>Get in touch</h2>
            <sub>We’d like to hear from you. Please fill out this form</sub>
            <div className="GetInTouch__first">
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
                <Input placeholder='you@company.com' setValue={setEmail} value={email}/>
            </div>
            <div>
                <small>Company name</small>
                <Input placeholder='Company name' setValue={setCompany} value={company}/>
            </div>
            <div>
                <small>Message</small>
                <TextArea placeholder='Message' setValue={setMessage} value={message}/>
            </div>
            <Button label='Send message' btnStyle={{width:'100%',padding: '12px 0',marginTop:16}}
            btnDivStyle={{fontSize:18,lineHeight:'24px'}}/>
        </div>
    )
}
export default GetInTouch;