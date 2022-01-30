import React, { useState, useEffect } from 'react';
import './PostList.css';
import axios from 'axios';


// import { toggleOpen } from './SearchBar';

function StudentButton(idx, id) {

    const [activeButton, setActiveButton] = useState();

    const [APIData, setAPIData] = useState([])

    const [open, setOpen] = useState([]);  

    function toggleButton(idx) {
        if (activeButton === idx) {
            setActiveButton()
        } else {
            setActiveButton(idx)
        }
    }

    function toggleOpen(id) {
        if (open.includes(id)) {
            setOpen(open.filter(sid => sid !== id))
        } else {
            let newOpen = [...open]
            newOpen.push(id)
            setOpen(newOpen)
        }
    }

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
                .then((response) => {
                setAPIData(response.data.students);
                })
                .catch(err => {
                    console.log(err)
                })
        }, [])

  return (
    <div>
        <button className={activeButton === idx ? 'moneyTime' : 'student-button'}
            onClick={() => {
                toggleButton(idx)
                toggleOpen(id)
            }}
        >
        </button>
            {
            APIData.map((item, id) => {
                return (
                <div key={id}>
                    <div className={open.includes(id) ? 'hide' : 'grade-container'}>
                        <p>Test 1: <span>{item.grades[0]}</span>%</p>
                        <p>Test 2: <span>{item.grades[1]}</span>%</p>
                        <p>Test 3: <span>{item.grades[2]}</span>%</p>
                        <p>Test 4: <span>{item.grades[3]}</span>%</p>
                        <p>Test 5: <span>{item.grades[4]}</span>%</p>
                        <p>Test 6: <span>{item.grades[5]}</span>%</p>
                        <p>Test 7: <span>{item.grades[6]}</span>%</p>
                        <p>Test 8: <span>{item.grades[7]}</span>%</p>
                    </div>
                </div>
                )
                })
            }
    </div>
  )
}

export default StudentButton;
