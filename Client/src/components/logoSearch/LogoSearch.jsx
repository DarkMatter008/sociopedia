import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
import Logo from '../../img/logo-new.png'

const LogoSearch = () => {
  return (
    <div className='Logo'>
        <img src={Logo} alt='' />
        <div className='LogoName'>
          <span>SOCIOPEDIA</span>
        </div>
    </div>
  )
}

export default LogoSearch