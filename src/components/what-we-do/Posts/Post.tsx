import Image from "next/image";
import React from "react";
import './Posts.css';
import {PostProps} from "@/interfaces/interfaces";

const Post: React.FC<PostProps> = ({imgPost, type, time, title, link, description, tags}) => {
    return (
        <div className="what__we__do__post" onClick={()=>window.location.href=link}>
            <Image src={imgPost} alt="Post"/>
            <div className="flex flex-row gap-2 items-center">
                <small style={{color: 'var(--orange)'}}>{type}</small>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                    <circle cx="2" cy="2.5" r="2" fill="white"/>
                </svg>
                <small>{time}</small>
            </div>
            <div className="flex flex-row justify-between w-full">
                <h5 style={{width:'90%'}}>{title}</h5>
                <svg style={{marginTop:4}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="white"/>
                </svg>
            </div>
            <p style={{color:"#fff"}}>{description}</p>
            <div className="flex flex-row gap-1">
                {tags.map((tag, index) => <small
                    key={index} style={index===0?{color: 'var(--white)',
                    borderRadius:  100,
                    border: '1px solid rgba(242, 55, 4, 0.30)',
                    background: 'rgba(242, 55, 4, 0.20)',
                    padding:'2px 12px'
                }:{color: 'var(--white)',
                    borderRadius:  100,
                    border: '1px solid rgba(51, 138, 243, 0.30)',
                    background: 'rgba(51, 138, 243, 0.20)',
                    padding:'2px 12px'
                }}>{tag}</small>)}
            </div>
        </div>
    )
}
export default Post