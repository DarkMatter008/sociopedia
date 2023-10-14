import React from 'react'
import './Header.css'
import LogoSearch from '../logoSearch/LogoSearch'
import SearchBar from '../searchBar/SearchBar'
import  NavBar  from '../navBar/navBar'

const Header = () => {
  return (
    <div className='Header'>
        <LogoSearch/>
        <SearchBar/>
        <NavBar/>
    </div>
  )
}

export default Header