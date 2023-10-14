import React from 'react'
import './navBar.css'
import {ReactComponent as Home} from '../../img/house-solid.svg'
import {ReactComponent as Msg} from '../../img/comments-solid.svg'
import {ReactComponent as Noti} from '../../img/bell-solid.svg'
import {ReactComponent as Setting} from '../../img/gear-solid.svg'
import { Link } from 'react-router-dom'


const navBar = () => {
  return (
    <div className='navBar'>
        <Link to= '../home'>
          <Home className='navIcon' fill='white'/>
        </Link>
        <Noti className='navIcon' fill='white'/>
        <Msg className='navIcon' fill='white'/>
        <Setting className='navIcon' fill='white'/>
    </div>
  )
}

export default navBar