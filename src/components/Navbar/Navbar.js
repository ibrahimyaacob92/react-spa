import React, { useState, useRef } from 'react'
import IconButton from './IconButton'
import { DiCodeigniter,DiRuby,DiAndroid } from 'react-icons/di'
import './Navbar.css'

const Navbar = () => {
  
  const [clicked, setClicked] = useState('')
  
  const handleClick = (label) =>{
    setClicked(label)
  }

  return (
    <div id='side-nav'>
      <div onClick={()=>handleClick('Hello World')}>
        <IconButton label='Hello World' clicked={clicked}>
          <DiCodeigniter/>
        </IconButton>
      </div>
      <div onClick={()=>handleClick('Goodbye')}>
        <IconButton label='Goodbye' clicked={clicked}>
          <DiRuby/>
        </IconButton>
      </div>
      <div onClick={()=>handleClick('Howdy')}>
        <IconButton label='Howdy' clicked={clicked}>
          <DiAndroid/>
        </IconButton>
      </div>

    </div>
  )
}

export default Navbar
