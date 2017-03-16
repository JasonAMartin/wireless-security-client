import React from 'react'
import {Link} from '../router'

export const Footer = () => {
  return (
    <div className='Footer'>
      <Link to='/'>All</Link>
      <Link to='/ui/active'>Active</Link>
      <Link to='/ui/complete'>Complete</Link>
    </div>
  )
}
