import React, { useState } from 'react'
import './TogglePlusMinus.css'
import plusSign from '../images/plusSign.png'
import minusSign from '../images/minusSign.png'

function TogglePlusMinus() {

    const [showIcon, setShowIcon] = useState(false)
    const [open, setOpen] = useState([]) 


    const handleChangeActive = () => {
        setShowIcon((button) => {
            return !button
        })
    }

    const toggleOpen = (id) => {
        if (open.includes(id)) {
            setOpen(open.filter(sid => sid !== id))
        } else {
            let newOpen = [...open]
            newOpen.push(id)
            setOpen(newOpen)
        }
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
                toggleOpen(id)
            }}
            />
        ) : (
            <img 
            className='plus-adjustment' 
            src={plusSign} 
            alt='plus sign' 
            onClick={(id) => {
                handleChangeActive()
                toggleOpen(id)
            }}
            />
        )}
    </>
  )
}

export default TogglePlusMinus

