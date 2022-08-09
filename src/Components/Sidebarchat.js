import React from 'react'

import data from '../data.json'
import './Sidebarchat.css'
const Sidebarchat = () => {
  return (
    <>
    {data.map((item)=>(
        
    <div className='sidebarchat' key={item.id}>
        <img className='image' src={item.avatar} alt='profile'/>
        <div className='sidebarchat-info'>
        <h2>{item.name} <span className='timestamp'>11.45pm</span></h2>
        <p>{item.message}<span className='notification'>2</span></p>

       </div>
      
       </div>
    ))}
    </>
       
 
       
       
   
  )
}

export default Sidebarchat