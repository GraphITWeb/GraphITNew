'use client'
import Button from "@/components/Button/Button";
import React, {useEffect, useRef, useState} from "react";
import './Posts.css';
import Post from "@/components/what-we-do/Posts/Post";
import postsData from '../../../data/posts.json';
import {IPost} from "@/interfaces/interfaces";

const Posts = () => {
    const postsRef = useRef(null);
    const [posts, setPosts] = useState<IPost[]>([]);


    useEffect(() => {
        const loadImages = async () => {
            const loadedPosts = await Promise.all(postsData.map(async post => {
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
    const scroll = (direction:string) => {
        const scrollAmount = 460; // Adjust the scroll amount based on your layout
        if (postsRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            postsRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="what__we__do__posts">
            <div className="what__we__do__posts__header">
                <h2>What we think</h2>
                <Button label='View all posts'
                        btnStyle={{ padding: '12px 32px', marginRight: 80 }}
                        btnDivStyle={{ fontSize: 18 }}
                        onClick={() => window.location.href = '/blogs'} />
            </div>
            <sub>The latest research, analyses and strategies to help future-focused organisations thrive in this period of great challenge</sub>
            <div className="what__we__do__posts__block" ref={postsRef}
                 style={{display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth'}}>
                <span style={{minWidth: 48, height: "auto"}}/>
                {posts.map((post, index) => (
                    <Post key={index} {...post}/>
                ))}
                <span style={{minWidth: 48, height: "auto"}}/>
            </div>
            <div className="flex flex-row gap-8" style={{marginTop: 32, marginLeft: 80 }}>
                <div className="arrow" onClick={() => scroll('left')} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="white"/>
                    </svg>
                </div>
                <div className="arrow" onClick={() => scroll('right')} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Posts;