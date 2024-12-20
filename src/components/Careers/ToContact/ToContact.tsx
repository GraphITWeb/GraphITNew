import Button from "@/components/UI/Button/Button";
import './ToContact.css'
export default function ToContact() {
    return (
        <div className="ToContact" style={{marginTop:64}}>
            <h2>Keen To Redefine?<br/><span style={{color: 'var(--orange)'}}>Join Our Team</span></h2>
            <Button href = '/careers' label='See open opportunities'
                    btnStyle={{padding: '12px 64px'}} btnDivStyle={{fontSize: 18}}/>
        </div>
    )
}