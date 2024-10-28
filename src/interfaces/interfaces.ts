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
export interface PostProps {
    imgPost: StaticImageData;
    type: string;
    time: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
}