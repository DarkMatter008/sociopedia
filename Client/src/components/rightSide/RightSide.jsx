import React from 'react'
import './RightSide.css'
import TrendCard from '../trendCard/TrendCard'


const RightSide = () => {
  return (
    <div className='RightSide'>
        <TrendCard/>

        <button className='button r-button'>Share</button>
    </div>
  )
}

export default RightSide