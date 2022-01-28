import React, { useState } from 'react';

function InputField() {

    const [add, setAdd] = useState();

    const [query, setQuery] = useState('');

    const [value, setValue] = useState([]);

    // function handleChange(e) {
    //     let key = e.which || e.keyCode
    //     if (key == '13') {
    //     setValue(e.target.value)
    //     setAdd('custom-class')
    // }}

    const handleClick = (e) => {
      let key = e.which || e.keyCode
      if (key == '13') {
      setValue(value => [...value, query])
      setAdd('custom-class')
      console.log(value)
      }
    }

    const updateQuery = ({ target }) => {
      setQuery(target.value)
    }

  return (
    <div>
      <div className='tag-container'>
        <div className={add ? 'custom-class' : ''} id='valueOne'>{value[0]}</div>
        <div className={add ? 'custom-class-two' : ''} id='valueOne'>{value[1]}</div>
      </div>
      <input label='Name: ' className='tag-bar' placeholder='Add a tag' onChange={updateQuery} onKeyPress={handleClick} />
    </div>
  )
}

export default InputField;

