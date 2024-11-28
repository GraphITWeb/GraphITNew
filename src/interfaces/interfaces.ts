import {StaticImageData} from "next/image";

export interface IPost {
    imgPost: StaticImageData;
    type: string;
    time: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
}
export interface ICareer {
    position:string;
    career: string;
    shortDescription:string;
    direction: string;
    country:string;
    description:string;
    time:string;
    responsibilities:string[];
    requirements:string[];
    qualifications:string[];
}
export interface PostProps {
    imgPost: StaticImageData;
    type: string;
    time: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
}