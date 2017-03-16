import React from 'react'
import Link from '../../router/Link'

const Navigation = () => {
  return (
    <div>
      <Link to='/'>All</Link>
      <Link to='/something'>Something</Link>
      <Link to='/hello'>Hello</Link>
    </div>
  )
}

export default Navigation
