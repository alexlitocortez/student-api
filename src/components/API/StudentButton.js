import React, { useState } from 'react';

function StudentButton(idx) {

    const [activeButton, setActiveButton] = useState();

    const [open, setOpen] = useState([]);  

    function toggleButton(idx) {
        if (activeButton === idx) {
            setActiveButton()
        } else {
            setActiveButton(idx)
        }
    }

  return (
    <div>
        <button className={activeButton === idx ? 'moneyTime' : 'student-button'}
            onClick={() => {
                toggleButton(idx)
            }}
        >
        </button>
    </div>
  )
}

export default StudentButton;

