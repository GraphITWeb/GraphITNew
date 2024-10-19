import Image from "next/image";
import Polygon from "@/assets/Polygon.png";
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
            <div style={{position: 'relative', width: '100%'}}>
                {/*<svg style={{position: "absolute", bottom: -65, right: -40, zIndex: -1}}*/}
                {/*     xmlns="http://www.w3.org/2000/svg" width="157" height="182" viewBox="0 0 157 182"*/}
                {/*     fill="none">*/}
                {/*    <path d="M0.5 46.25L78.5 1.5L156.5 46.25V135.75L78.5 180.5L0.5 135.75L0.5 46.25Z"*/}
                {/*          stroke="#F23704" stroke-opacity="0.5" stroke-dasharray="12 12"/>*/}
                {/*</svg>*/}
                <Image width={179} height={156} src={Polygon} alt='Polygon'
                       style={{position: "absolute", bottom: -73, right: -51, zIndex: -1}}/>
            </div>
            <div className="CRM__block">
                <Image
                    src={Illustration}
                    alt="Illustration"
                    className="w-full h-auto"
                />
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
                    <Button label='See case studies' btnStyle={{padding: '12px 32px', marginLeft: 70}}
                            btnDivStyle={{fontSize: 18}}/>
                </div>
            </div>
        </div>
    </>)
}
export default CRM;