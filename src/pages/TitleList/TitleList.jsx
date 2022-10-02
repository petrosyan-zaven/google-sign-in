import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const TitleList = ({posts}) => {

  const { id } = useParams();
  const { title } = useParams();

  return (
    <div className='TitleList'>
      <Link to={'/' + posts.id}> {posts.title}</Link> 
    </div>
  )
}

export default TitleList