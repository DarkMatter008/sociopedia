import React from 'react'
import './PostSide.css'
import PostShare from '../postShare/PostShare'
import SearchBar from '../searchBar/SearchBar'
import Posts from '../posts/Posts'

const PostSide = () => {
  return (
    <div className='PostSide'>
        {/* <SearchBar/> */}
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide