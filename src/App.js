import React, { useState, useEffect } from 'react';
import axios from 'axios'  
import './App.css'
import TogglePlusMinus from './components/TogglePlusMinus';

function App() {

  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);
  const [open, setOpen] = useState([]) 

  useEffect(() => {
    axios.get('https://api.hatchways.io/assessment/students')
    .then(response => {
        console.log(response.data.students)
        setAllData(response.data.students)
        setFilteredData(response.data.students)
    })
    .catch(err => {
        console.log(err)
    })
  }, [])

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    if (value !== '') {
      result = allData.filter((student) => {
        return `${student.firstName} ${student.lastName}`.toLowerCase().includes(value.toLowerCase())
      })
        setFilteredData(result)
    }
  }

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
    <div className="App">
      <h1 className='search-label'>Search: </h1>
      <input className='search-bar' type='text' onChange={(e) => handleSearch(e)} />
      <div style={{padding:10}}>
      {filteredData.map((item, id) => {
        return(
          <div className='student-block-one' key={item.id}> 
            <div>
                <img className='student-image' src={item.pic} alt='student headshot'></img>
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
                    <p>{item.city}</p>
                    <p>{item.email}</p>
                    <p>{item.company}</p>
                    <p>{item.skill}</p>
                    <p>Average: <span>{findAverage(item.grades)}</span>%</p>
                </div>
                <div className={open.includes(id) ? 'grade-container' : 'hide'}>
                    {item.grades.map((grade, i) => { return (
                        <p>Test {i + 1}: <span>{grade}</span>%</p>
                    )})}
                </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
