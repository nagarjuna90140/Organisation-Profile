import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
        <ol> 
            <h1>Zettamine pvt Ltd</h1>
            <h4>innovation to lead</h4>
           <Link to='privacy' className='nav-item'>Privacy and policy</Link>
           <Link to='conditions'className='nav-item'>terms and conditions</Link>


        </ol>
    </div>
  )
}
