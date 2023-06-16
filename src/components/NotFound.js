import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound-container'>
        <span>404</span>
        <Link to={'/'} className='link'><button>Return to home </button></Link>
    </div>
  )
}

export default NotFound