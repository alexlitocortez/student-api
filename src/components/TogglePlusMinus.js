import React, { useState } from 'react'
import './TogglePlusMinus.css'
import plusSign from '../images/plusSign.png'
import minusSign from '../images/minusSign.png'

function TogglePlusMinus() {

    const [showIcon, setShowIcon] = useState(false)

    const handleChangeActive = () => {
        setShowIcon((button) => {
            return !button
        })
    }

  return (
    <>
        {showIcon ? (
            <img 
            className='minus-adjustment' 
            src={minusSign} 
            alt='minus sign' 
            onClick={(id) => {
                handleChangeActive()
            }}
            />
        ) : (
            <img 
            className='plus-adjustment' 
            src={plusSign} 
            alt='plus sign' 
            onClick={(id) => {
                handleChangeActive()
            }}
            />
        )}
    </>
  )
}

export default TogglePlusMinus

