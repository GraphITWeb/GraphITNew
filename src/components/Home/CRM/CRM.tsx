'use client'
import Image from "next/image";
import Illustration from "@/assets/Illustration.png";
import Button from "@/components/Button/Button";
import './CRM.css'
const CRM = () => {
    return (<>
        <div className="CRM">
            <div>
                <h2>A CRM Designed with You in Mind.</h2>
                <sub style={{textAlign: 'center', width: '100%', display: 'block'}}>Customize everything to make
                    Venture adapt to your business, not the other way around.</sub>
            </div>
            <div className="CRM__block">
                <Image
                    src={Illustration}
                    alt="Illustration"
                    className="w-full"
                />
                <div className="CRM__block__arrow" style={{left:32}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                    </svg>
                </div>
                <div className="CRM__block__arrow" style={{right:32}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                    </svg>
                </div>
                <div className="CRM__block__description">
                    <div>
                        <h5>
                            Powering the Future: AI-Driven Innovation for Renewable Cars
                        </h5>
                        <p>
                            By optimizing performance, increasing efficiency, and driving sustainability, our
                            AI-powered solutions are transforming the future of transportation. See how we’re
                            pushing
                            the boundaries of what&#39;s possible in the automotive world—innovation that’s driving
                            change for a greener tomorrow.By optimizing performance, increasing efficiency, and
                            driving sustainability, our AI-powered solutions are transforming the future of
                            transportation. See how we’re pushing the boundaries of what&#39;s possible in the
                            automotive world—innovation that’s driving change for a greener/
                        </p>
                    </div>
                    <Button onClick={()=>window.location.href='/case-studies'} label='See case studies' btnStyle={{padding: '12px 32px'}}
                            btnDivStyle={{fontSize: 18}}/>
                </div>
            </div>
        </div>
    </>)
}
export default CRM;