'use client'
import Button from "@/components/UI/Button/Button";

const SeeWhatWeDoButton= () => {
    return(
        <Button onClick={() => window.location.href = '/what-we-do'} label='See what we do'
                btnStyle={{padding: '12px 32px'}} btnDivStyle={{fontSize: 18}}/>
    )
}
export default SeeWhatWeDoButton;