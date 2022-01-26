import React, { useState } from 'react';
import DynamicDiv from './DynamicDiv';


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

    const handleDiv = (event) => {
        let key = event.which || event.keyCode;
        if (key == '13') {
            setAdd()
        } else {
          setAdd(idx)
        }
    }

    // Add and to if statement

  return (
    <div>
        {add === idx ? <DynamicDiv /> : null}
        <input type='text' className='tag-bar' placeholder='Add a tag' onKeyPress={handleDiv} />
    </div>
  )
}

export default DynamicElement;



