
import React, { useState } from 'react'
import '../styles/Child.css'
const Selection = (props) => {
    let apply=props.applyColor;
    const[colors,setColor]=useState("");
  return (
      <div className="fix-box" onClick={()=>{setColor(apply.background)}} style={{backgroundColor:colors}}> 
       <h3 className='subheading'>{props.val}</h3>
      </div>
      
  )
}

export default Selection
