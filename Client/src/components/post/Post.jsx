import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment-solid.png'
import Share from '../../img/share-n.png'
import Like from '../../img/love-solid.png'
import NotLike from '../../img/love-holo.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequests'

const Post = ({data}) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike= ()=>{
    setLiked((prev)=> !prev)
    likePost(data._id, user._id)
    liked ? setLikes((prev)=> prev - 1) : setLikes((prev)=> prev + 1)
  }
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    
    <div className='Post'>
        <div className='details'>
            <div>
                <img src={user.coverPicture? serverPublic+ user.coverPicture : serverPublic + "default-profile.jpg"} alt=''  />
                <span><b>{user.firstname} {user.lastname}</b></span>
            </div>
            <span> {data.desc}</span>
        </div>
        {/* for image post */}
        { data.image && 
          <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt='Image' />
        }
        {/* for video post */}
        { data.video &&
          <video className='prevImg' src={data.video? process.env.REACT_APP_PUBLIC_FOLDER + data.video : ""} controls width="100%" height="300" alt='Video' />
        }

        <div className='postReact'>
            <img src={liked ? Like : NotLike} 
              style={{ cursor: "pointer", height: '25px'}} 
              alt=''
              onClick={handleLike} />
            <img src={Comment} style={{ cursor: "pointer", height: '27px'}} alt=''/>
            <img src={Share} style={{ cursor: "pointer", height: '20px'}} alt=''/>
        </div>
        <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes} Likes</span>
    </div>
  )
}

export default Post