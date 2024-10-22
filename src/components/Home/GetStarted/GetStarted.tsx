'use client'
import Button from "@/components/Button/Button";

const GetStarted = () => {
    return(
        <Button onClick={()=>window.location.href='/contact-us'} label='Get Started' btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
    )
}
export default GetStarted;