import React from 'react'
import {Link} from 'react-router-dom'
import './TopBar.css'

const TopBar = ({main}) => {
  return (
    <nav id='top-bar'>
      <h2>
        {main}
      </h2>
      <div id="top-bar-left">
        <Link to='/'>Something</Link>
        <Link to='/'>Contact Me</Link>
      </div>
      
    </nav>
  )
}

export default TopBar
