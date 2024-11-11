'use client'
import React, {useEffect, useState} from "react";
import {IPost} from "@/interfaces/interfaces";
import postsData from "@/data/posts.json";
import Image from "next/image";
import './Editors.css';

const Editors = () => {
    const [posts, setPosts] = useState<IPost[]>([]);


    useEffect(() => {
        const loadImages = async () => {
            const loadedPosts = await Promise.all(postsData.slice(0, 3).map(async post => {
                const imgPost = (await import(`@/assets/${post.imgPost}`)).default;
                return {
                    ...post,
                    imgPost
                };
            }));
            setPosts(loadedPosts);
        };

        loadImages().then();
    }, []);
    return (
        <>
            <h3 className="what__we__think__posts__h3">Editor’s choice</h3>
            <div className="what__we__think__posts">
                <div className="what__we__think__post__big">
                    {posts.length > 0 && <>
                        <Image src={posts[0].imgPost} alt="Post" />
                        <div className="flex flex-row gap-2 items-center">
                            <small style={{color: 'var(--orange)'}}>{posts[0].type}</small>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                                <circle cx="2" cy="2.5" r="2" fill="white"/>
                            </svg>
                            <small>{posts[0].time}</small>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h4 style={{width: '90%'}}>{posts[0].title}</h4>
                            <svg onClick={() => window.location.href = posts[0].link} style={{marginTop: 4}}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="white"/>
                            </svg>
                        </div>
                        <p style={{color:"#fff"}}>{posts[0].description}</p>
                        <div className="flex flex-row gap-1">
                            {posts[0].tags.map((tag, index) => <small
                                key={index} style={{
                                color: 'var(--white)',
                                borderRadius: 100,
                                border: '1px solid rgba(242, 55, 4, 0.30)',
                                background: 'rgba(242, 55, 4, 0.20)',
                                padding: '2px 12px'
                            }}>{tag}</small>)}
                        </div>
                    </>}
                </div>
                <div className="what__we__think__posts__small">
                    {posts.length > 2 && <>
                        <div className="what__we__think__post__small">
                            <Image className="w-7/12" src={posts[1].imgPost} alt="Post"/>
                            <div className="w-5/12">
                                <div className="flex flex-row gap-2 items-center">
                                    <small style={{color: 'var(--orange)'}}>{posts[1].type}</small>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5"
                                         fill="none">
                                        <circle cx="2" cy="2.5" r="2" fill="white"/>
                                    </svg>
                                    <small>{posts[1].time}</small>
                                </div>
                                <div className="flex flex-row justify-between w-full">
                                    <h4 style={{width: '90%'}}>{posts[1].title}</h4>
                                    <svg onClick={() => window.location.href = posts[1].link} style={{marginTop: 4}}
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="white"/>
                                    </svg>
                                </div>
                                <p style={{color: '#fff'}}>{posts[1].description}</p>
                                <div style={{marginTop: 16}} className="flex flex-row gap-1">
                                    {posts[1].tags.map((tag, index) => <small
                                        key={index} style={{
                                        color: 'var(--white)',
                                        borderRadius: 100,
                                        border: '1px solid rgba(242, 55, 4, 0.30)',
                                        background: 'rgba(242, 55, 4, 0.20)',
                                        padding: '2px 12px'
                                    }}>{tag}</small>)}
                                </div>
                            </div>

                        </div>
                        <div className="what__we__think__post__small">
                            <Image className="w-7/12" src={posts[2].imgPost} alt="Post"/>
                            <div className="w-5/12">
                                <div className="flex flex-row gap-2 items-center">
                                    <small style={{color: 'var(--orange)'}}>{posts[2].type}</small>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5"
                                         fill="none">
                                        <circle cx="2" cy="2.5" r="2" fill="white"/>
                                    </svg>
                                    <small>{posts[2].time}</small>
                                </div>
                                <div className="flex flex-row justify-between w-full">
                                    <h4 style={{width: '90%'}}>{posts[2].title}</h4>
                                    <svg onClick={() => window.location.href = posts[2].link} style={{marginTop: 4}}
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="white"/>
                                    </svg>
                                </div>
                                <p style={{color: '#fff'}}>{posts[2].description}</p>
                                <div style={{marginTop: 16}} className="flex flex-row gap-1">
                                    {posts[2].tags.map((tag, index) => <small
                                        key={index} style={{
                                        color: 'var(--white)',
                                        borderRadius: 100,
                                        border: '1px solid rgba(242, 55, 4, 0.30)',
                                        background: 'rgba(242, 55, 4, 0.20)',
                                        padding: '2px 12px'
                                    }}>{tag}</small>)}
                                </div>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}
export default Editors