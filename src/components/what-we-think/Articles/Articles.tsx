'use client'
import React, { useEffect, useState } from "react";
import { IPost } from "@/interfaces/interfaces";
import postsData from "@/data/posts.json";
import Post from "@/components/Post/Post";
import './Articles.css';
import Dropdown from "@/components/Dropdown/Dropdown";

interface ArticlesProps {
    type: string;
}

const Articles: React.FC<ArticlesProps> = ({ type }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [allPosts, setAllPosts] = useState<IPost[]>([]);

    const [selectedTopic, setSelectedTopic] = useState<string[]>([]);
    const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState<string[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedPosts = await Promise.all(postsData.map(async post => {
                const imgPost = (await import(`@/assets/${post.imgPost}`)).default;
                return {
                    ...post,
                    imgPost
                };
            }));
            setAllPosts(loadedPosts);
            setPosts(loadedPosts);
        };

        loadImages().then();
    }, []);

    useEffect(() => {
        let filteredPosts = allPosts;

        if (selectedTopic.length > 0) {
            filteredPosts = filteredPosts.filter(post =>
                selectedTopic.some(topic => post.tags.includes(topic))
            );
        }

        if (selectedIndustry.length > 0) {
            filteredPosts = filteredPosts.filter(post =>
                selectedIndustry.some(industry => post.tags.includes(industry))
            );
        }

        if (selectedSort.length > 0) {
            filteredPosts = filteredPosts.filter(post =>
                selectedSort.some(sort => post.type===sort)
            );
        }

        setPosts(filteredPosts);
    }, [selectedTopic, selectedIndustry, selectedSort, allPosts]);

    return (
        <div className="what__we__think__articles">
            <h3>{type}</h3>
            <div className="what__we__think__articles__dropdowns">
                <Dropdown
                    variants={['Next-Gen AI Transformation', 'AI Copilots', 'Data Platforms']}
                    label='Select topic'
                    selected={selectedTopic}
                    setSelected={setSelectedTopic}
                />
                <Dropdown
                    variants={['Retail', 'Healthcare', 'Legal', 'E-Commerce', 'Telecommunications', 'Automotive']}
                    label='Select industry'
                    selected={selectedIndustry}
                    setSelected={setSelectedIndustry}
                />
                <Dropdown
                    variants={['Case Study', 'Research Report']}
                    label='Content Type'
                    selected={selectedSort}
                    setSelected={setSelectedSort}
                />
            </div>
            <div className="what__we__think__articles__block">
                {posts.map((post, index) => (<Post key={index} {...post} />))}
            </div>
        </div>
    );
};

export default Articles;