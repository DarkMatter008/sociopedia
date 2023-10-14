import React from 'react'
import './ProfileLeft.css'
import InfoCard from '../infoCard/InfoCard'
import FollowersCard from '../../followersCard/FollowersCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft