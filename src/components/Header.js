import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
        <div class="title"><span>Movie Theater</span></div>
            <div class="nav">
                <ul>
                    <li><Link to={'/not-found'} className='link'>Movies</Link></li>
                    <li><Link to={'/not-found'} className='link'>Ranting</Link></li>
                    <li><Link to={'/not-found'} className='link'>About us</Link></li>
                    <li><Link to={'/not-found'} className='link'>My account</Link></li>
                </ul>
            </div>
   </div>
  )
}

export default Header