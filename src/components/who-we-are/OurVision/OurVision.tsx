import React from "react";
import './OurVision.css';
import Image, {StaticImageData} from "next/image";

interface OurVisionProps {
    style?: React.CSSProperties;
    image: StaticImageData;
    svgIcon: React.ReactNode;
    title: string;
    description: string;
}

const OurVision: React.FC<OurVisionProps> = ({style, image, svgIcon, title, description}) => {
    return (
        <div className="our__vision__block" style={{...style}}>
            <Image src={image} alt="image"/>
            <div className="our__vision__content">
                <div className="our__vision__svg">
                    <div className="our__vision__svg__small">
                        {svgIcon}
                    </div>
                </div>
                <h3 style={{marginTop: 8}}>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurVision;
