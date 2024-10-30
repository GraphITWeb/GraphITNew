'use client'
import Button from "@/components/Button/Button";
import Image from "next/image";
import CTAImage from '../../../assets/CTA2.png'
export default function Business(){
    return (
        <div className="business">
            <div>
                <h2>Take Your Business to the</h2>
                <h2 style={{color: 'var(--orange)'}}>Next Level</h2>
            </div>
            <sub style={{color: 'white', marginBottom: 24}}>Contact</sub>
            <Button onClick={() => window.location.href = '/contact-us'} label='Get Started'
                    btnStyle={{padding: '12px 114px'}} btnDivStyle={{fontSize: 18}}/>
            {/*<Image src={CTAImage} alt='CTA'/>*/}
        </div>
    )
}