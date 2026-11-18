import React from 'react'

function Inputbox({className, placeholder}) {
  return (
    <>
        <input type="text" className={className} placeholder={placeholder}/>        
    </>
  )
}

export default Inputbox