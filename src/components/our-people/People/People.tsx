import Image, {StaticImageData} from "next/image";
import React from "react";
import './People.css'
interface PeopleProps {
    imgUser: StaticImageData;
    name: string;
    description: string;
}

const People: React.FC<PeopleProps> = ({imgUser,name,description}) => {
    return (
        <div className="people">
                <div className="people__flip-card">
                    <div className="people__flip-card-inner">
                        <div className="people__flip-card-front">
                            <Image src={imgUser} alt="user"/>
                        </div>
                        <div className="people__flip-card-back">
                            <small>Lorem ipsum dolor sit amet consectetur. Nisl sagittis egestas scelerisque volutpat eu feugiat elit ultricies. Ornare sodales mauris pellentesque pellentesque nec lectus arcu viverra. Sit facilisis sit est eget a et nunc leo viverra. Et luctus mauris dolor massa faucibus id. Morbi vitae augue feugiat ut ipsum interdum curabitur tempor. Tellus egestas porttitor tortor sit facilisi. Consequat fermentum eleifend orci nibh ultrices arcu urna in. Fusce faucibus quis augue tortor congue enim. Elementum amet quis maecenas nam lacinia ornare mauris adipiscing.
                            </small>
                            <div className="flex flex-row items-center justify-start gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"
                                        fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245L18.3362 18.339ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                                        fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
                                        fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="people__info">
                <h3>{name}</h3>
                <sub>{description}</sub>
            </div>
        </div>
    )
}
export default People;