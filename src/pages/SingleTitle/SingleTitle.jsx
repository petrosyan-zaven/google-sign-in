import React from 'react'
import './SingleTitle.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPostById } from '../../api'

const SingleTitle = () => {

  const {id} = useParams();
  const [postById, setPostByID] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then(data => {
      setPostByID(data);
    });
  },[id])

  return (
    <div className='SingleTitle'>
       
      {
        postById && 
        <div>
          <h2>{postById.id}. {postById.title}</h2>
          <h3>{postById.title}</h3>
          <p>{postById.body}</p>
          

        </div>
      }
      <button onClick={()=> navigate(-1)}><i className="fa-solid fa-backward"></i></button>
    </div>
  )
}

export default SingleTitle