import React, { useState } from 'react';

function InputField() {

    const [add, setAdd] = useState();

    const [value, setValue] = useState();

    function handleChange(e) {
        let key = e.which || e.keyCode
        if (key == '13') {
        setValue(e.target.value)
        setAdd('custom-class')
        }
    }

  return (
    <div>
        <div className={add ? 'custom-class' : ''} id='moneyTimeOne'>{value}</div>
        <input label='Name: ' className='tag-bar' placeholder='Add a tag' onKeyPress={handleChange} />
    </div>
  )
}

export default InputField;