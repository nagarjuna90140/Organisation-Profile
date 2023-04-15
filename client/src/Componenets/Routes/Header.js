import React from 'react'
import {  NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <div className='navBar'>
        <ol> 
            <NavLink to='home' className='nav-item'>home</NavLink>
            <NavLink to='about' className='nav-item'> about</NavLink>
            <NavLink to='contact' className='nav-item'>contact</NavLink>
            <NavLink to='registration' className='nav-item'>registration</NavLink>
            <NavLink to='login'className='nav-item'>login</NavLink>
        </ol>
        </div>
    </div>
  )
}
