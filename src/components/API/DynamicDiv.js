import React from 'react';

function DynamicDiv() {

    function moneyTime(event) {
        var key = event.which || event.keyCode;
        if (key == '13') {
            const moneyDiv = document.createElement('div');
            moneyDiv.className = 'custom-class';
            document.getElementById('moneyTimeOne').appendChild(moneyDiv);
            console.log('hi');
        }
    }

  return
    <div>
        <div id='moneyTimeOne'>

        </div>
    </div>;
}

export default DynamicDiv;

