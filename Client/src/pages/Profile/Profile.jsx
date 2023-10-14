import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/profileCom/profileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/postSide/PostSide'
import RightSide from '../../components/rightSide/RightSide'
import Header from '../../components/header/Header'

const Profile = () => {
  return (
    <>
      <Header/>
      <div className='Profile'>
        <ProfileLeft/>

        <div className='profile-center'>
          <ProfileCard location = "profilePage"/>
          <PostSide/>
        </div>
        
          <RightSide/>
      </div>
    </>
  )
}

export default Profile