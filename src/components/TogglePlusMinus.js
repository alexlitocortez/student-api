import React, { useState } from 'react'
import './TogglePlusMinus.css'
import plusSign from '../images/plusSign.png'
import minusSign from '../images/minusSign.png'

function TogglePlusMinus( { toggleOpen }) {

    const [showIcon, setShowIcon] = useState(false)

    const handleChangeActive = () => {
        setShowIcon((button) => {
            return !button
        })
    }

  return (
    <div>
        {showIcon ? (
            <img 
            className='minus-adjustment' 
            src={minusSign} 
            alt='minus sign' 
            onClick={() => {
                handleChangeActive()
                toggleOpen()
            }}
            />
        ) : (
            <img 
            className='plus-adjustment' 
            src={plusSign} 
            alt='plus sign' 
            onClick={() => {
                handleChangeActive()
            }}
            />
        )}
    </div>
  )
}

export default TogglePlusMinus

