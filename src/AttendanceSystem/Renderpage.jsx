import React from 'react'

function Renderpage() {
  return (
    <div className='renderpage-container'>
        <ol className='ordered-list'>
            <li className='myLists'>
                List 1
                <button>Button 1</button>
            </li>
            <li className='myLists'>
                List 2
                <button>Button 2</button>
            </li>
            <li className='myLists'>
                List 3
                <button>Button 3</button>
            </li>
            <li className='myLists'>
                List 4
                <button>Button 4</button>
            </li>
        </ol>
    </div>
  )
}

export default Renderpage