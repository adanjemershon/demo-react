import React from 'react'
import Inputbox from './Inputbox'
import Button from './Button'

function Form() {
  return ( 
    <div className='input-container'>
        <h1>HUB Login</h1>
        <Inputbox className='input-box' placeholder='Username'/>
        <Inputbox className='input-box' placeholder='Password'/>
        <Button className='myBtn-primary' label='Login'/>
    </div>
  )
}

export default Form