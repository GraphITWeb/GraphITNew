'use client'
import React, {useEffect, useState} from "react";
import {IPost} from "@/interfaces/interfaces";
import postsData from "@/data/posts.json";
import Post from "@/components/Post/Post";
import './Articles.css';
import Dropdown from "@/components/Dropdown/Dropdown";
interface ArticlesProps{
    type: string;
}
const Articles:React.FC<ArticlesProps> = ({type}) => {
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
    const [selectedTopic, setSelectedTopic] = useState('Select topic')
    const [selectedIndustry, setSelectedIndustry] = useState('Select industry')
    const [selectedSort, setSelectedSort] = useState('Content Type')

    return(
      <div className="what__we__think__articles">
          <h3>{type}</h3>
          <div className="what__we__think__articles__dropdowns">
              <Dropdown variants={['Research report','Engineer']} label='Select topic' selected={selectedTopic} setSelected={setSelectedTopic}/>
              <Dropdown variants={['AI','Big Data']} label='Select industry' selected={selectedIndustry} setSelected={setSelectedIndustry}/>
              <Dropdown variants={['Content A','Content B']} label='Content Type' selected={selectedSort} setSelected={setSelectedSort}/>
          </div>
          <div className="what__we__think__articles__block">
              {posts.map((post, index) => (<Post key={index} {...post}/>))}
          </div>
      </div>
  )
}
export default Articles;