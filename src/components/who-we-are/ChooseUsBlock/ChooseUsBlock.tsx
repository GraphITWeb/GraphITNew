import React from "react";
import './ChooseUsBlock.css';

interface OurVisionProps {
    svgIcon: React.ReactNode;
    title: string;
    description: string;
}

const ChooseUsBlock: React.FC<OurVisionProps> = ({svgIcon, title, description}) => {
    return (
        <div className="choose__us__block">
            <div className="choose__us__svg">
                {svgIcon}
            </div>
            <h5 style={{marginTop: 8}}>{title}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ChooseUsBlock;
