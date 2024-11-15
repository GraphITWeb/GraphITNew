'use client'
import Button from "@/components/Button/Button";

export default function Business() {
    return (
        <div className="business">
            <h2>Take Your Business to the <span style={{color: 'var(--orange)'}}>Next Level</span></h2>
            <Button onClick={() => window.location.href = '/contact-us'} label='Get Started'
                    btnStyle={{padding: '12px 114px'}} btnDivStyle={{fontSize: 18}}/>
        </div>
    )
}