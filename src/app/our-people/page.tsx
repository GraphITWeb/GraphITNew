import React from 'react';
import './our-people.css';
import People from "@/components/our-people/People";
import PeopleImage from '../../assets/People.png'
import Main from "@/components/Main/Main";
export default function OurPeoplePage() {
    return (
        <div className="flex flex-col items-center justify-items-center p-0">
            <Main subText="Who we are" header="Our people"
                  description="We are cross-disciplinary team that loves to create great experiences for our customers."/>
            <div className="our__people">
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
                <People imgUser={PeopleImage} name='Mary Kay' description='Founder & CEO'/>
            </div>
        </div>
    )
}
