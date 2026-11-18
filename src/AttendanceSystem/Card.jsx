import React from 'react'

function Card({name, desc}) {
  return (
    <div className='card-container'>
        <img src="src\assets\image.jpg" alt="Image" className='my-image'/>
        <h2>{name}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Card