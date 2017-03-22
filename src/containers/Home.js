import React from 'react'
import { Link } from 'react-router'

const Home = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>HOME</h1>
        <p>Select a link:</p>
        <Link to='/ui/stats'>STATS</Link>
      </div>
    )
  }
})

export default Home
