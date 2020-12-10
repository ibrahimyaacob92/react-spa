import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { withRouter } from 'react-router-dom'
import './IconButton.css'

const IconButton = ({label, clicked, children}) => {
    
  return (
    <IconContext.Provider value={{color:'white', size:'30px', alignItems:'center'}}>
      <div id='square-button' className={(clicked==label)?'selected':''}>
        <div id='icon-container'>{children}</div>
        <span>{label}</span>
        
      </div>
    </IconContext.Provider>
  )
}

export default IconButton
