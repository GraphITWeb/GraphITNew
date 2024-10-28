'use client'
import {useEffect, useState} from "react";
import {IPost} from "@/interfaces/interfaces";
import postsData from "@/data/posts.json";
import Post from "@/components/Post/Post";
import './Articles.css';
import Dropdown from "@/components/Dropdown/Dropdown";
const Articles = () => {
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
    const [selectedTopic, setSelectedTopic] = useState('Topic')
    const [selectedIndustry, setSelectedIndustry] = useState('Industry')
    const [selectedSort, setSelectedSort] = useState('Sort By')

    return(
      <div className="what__we__think__articles">
          <h3>All articles</h3>
          <div className="flex flex-row justify-between w-full gap-8">
              <Dropdown variants={['Research report','Engineer']} label='Topic' selected={selectedTopic} setSelected={setSelectedTopic}/>
              <Dropdown variants={['AI','Big Data']} label='Industry' selected={selectedIndustry} setSelected={setSelectedIndustry}/>
              <Dropdown variants={['Sort from Oldest to Newest','Sort from Newest to Oldest']} label='Sort By' selected={selectedSort} setSelected={setSelectedSort}/>
          </div>
          <div className="what__we__think__articles__block">
              {posts.map((post, index) => (<Post key={index} {...post}/>))}
          </div>
      </div>
  )
}
export default Articles;