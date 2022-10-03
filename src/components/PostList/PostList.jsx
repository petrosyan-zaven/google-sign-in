import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../../api';
import TitleList from '../../pages/TitleList';

const PostList = () => {

  const [posts, setPost] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    getPosts(id).then(data => {
      setPost(data.posts);
    });
  },[])

  return (
    <div className='PostList'>
      
      {
        posts.map(post=>{
          return <TitleList 
                  key={post.id}        
                  posts={post} />
        })
      }
    </div>
  )
}

export default PostList