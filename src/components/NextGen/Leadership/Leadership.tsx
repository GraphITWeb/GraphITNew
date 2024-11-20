'use client'
import './Leadership.css'
import Button from "@/components/Button/Button";
const Leadership = () => {
    return(
        <div className="leadership">
            <div>
                <h2>Leadership</h2>
                <sub>At Graphit, we believe tomorrow belongs to those who build it. Amplifying your industry expertise with our advanced AI knowledge, we help organizations launch their next big innovations and enable transformation at scale. We are technologists, data scientists, and strategists who build solutions to address the most important challenges and opportunities.</sub>
            </div>
            <Button onClick={() => window.location.href = '/contact-us'} label='Contact Us'
                    btnStyle={{padding: '12px 114px'}} btnDivStyle={{fontSize: 18}}/>
        </div>
    )
}
export default Leadership;