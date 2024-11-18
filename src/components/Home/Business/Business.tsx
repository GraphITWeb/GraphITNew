'use client'
import Button from "@/components/Button/Button";

export default function Business() {
    return (
        <div className="business">
            <h2>Tomorrow’s Transformation <span style={{color: 'var(--orange)'}}>Begins Today</span></h2>
            <Button onClick={() => window.location.href = '/contact-us'} label='Contact Us'
                    btnStyle={{padding: '12px 114px'}} btnDivStyle={{fontSize: 18}}/>
        </div>
    )
}