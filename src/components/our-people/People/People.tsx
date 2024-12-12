import Image, {StaticImageData} from "next/image";
import React, { useState, useEffect } from "react";
import './People.css'
interface PeopleProps {
    imgUser: StaticImageData;
    name: string;
    position: string;
    description:string;
}

const People: React.FC<PeopleProps> = ({imgUser,name,position,description}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleClick = () => {
        if (isMobile) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <>
            <div
                className={`people__flip-card ${isMobile ? 'mobile' : ''}`}
                onClick={handleClick}
            >
                <div className={`people__flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="people__flip-card-front">
                        <Image src={imgUser} alt="user"/>
                    </div>
                    <div className="people__flip-card-back">
                        <small>
                            {description}
                        </small>
                        <div className="flex flex-row items-center justify-start gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245L18.3362 18.339ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                                    fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="people__info">
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </>
    )
}
export default People;

