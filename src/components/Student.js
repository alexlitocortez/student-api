import React, { useState, useEffect } from 'react'
import './Student.css'
import axios from 'axios'  
import TogglePlusMinus from './TogglePlusMinus.js'

function Student(id) {

    const [APIData, setAPIData] = useState([])
    const [open, setOpen] = useState([]) 

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
            .then((response) => {
            setAPIData(response.data.students)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    function findAverage(array) {
        let average = 0
        for(let i = 0; i < array.length; i++) {
            let currentNum = Number(array[i])
            average += currentNum
        }
        average = average / array.length
        return average
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
        <div>
            {APIData.map((item, id) => (
            <div className='student-block-one' key={item.id}> 
                <div>
                    <img className='student-image' src={item.pic} alt='student picture'></img>
                </div>
                <div className='student-info'>
                    <div className='name-container'>
                        <h1>
                            <span>Name: {item.firstName + " " + item.lastName}</span><br />
                        </h1>
                        <button className='grade-button' onClick={() => toggleOpen(id)}>
                            <TogglePlusMinus />
                        </button>
                    </div>
                    <div className='student-contact-info'>
                        <p><span>{item.city}</span></p>
                        <p><span>{item.email}</span></p>
                        <p><span>{item.company}</span></p>
                        <p><span>{item.skill}</span></p>
                        <p>Average: <span>{findAverage(item.grades)}</span>%</p>
                    </div>
                    <div className={open.includes(id) ? 'grade-container' : 'hide'}>
                        {item.grades.map((grade, i) => { return (
                            <p>Test {i + 1}: <span>{grade}</span>%</p>
                        )})}
                    </div>
                </div>
            </div>
            ))}
        </div>
  )
} 

export default Student