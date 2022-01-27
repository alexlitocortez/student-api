import React, { useState } from 'react';

// function moneyTime(event) {
//     let key = event.which || event.keyCode;
//     if (key == '13') {
//         const userValue = event.target.value;
//         const moneyDiv = document.createElement('div')
//         moneyDiv.className = 'custom-class'
//         document.getElementById('moneyTimeOne').appendChild(moneyDiv).innerHTML = userValue
//     }
// }

function DynamicElement(idx) {

    const [add, setAdd] = useState();

    const [value, setValue] = useState('');

    const handleDiv = (event) => {
        let key = event.which || event.keyCode;
        if (key == '13') {

          const userValue = event.target.value
          const moneyDiv = document.createElement('div')
          document.getElementById('moneyTimeOne').appendChild(moneyDiv).innerHTML = userValue
          setAdd(idx)
        } else {
          setAdd()
        }
    }

  return (
    <div>
        {/* {add === idx ? <DynamicDiv /> : null} */}
        <div className={add === idx ? 'custom-class' : 'null'} id='moneyTimeOne'>

        </div>
        <input type='text' className='tag-bar' id='tag-bar' placeholder='Add a tag' onKeyPress={handleDiv} />
    </div>
  )
}

export default DynamicElement;



