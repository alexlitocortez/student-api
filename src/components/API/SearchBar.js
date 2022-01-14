import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostList.css';

function SearchBar() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
            .then((response) => {
                setStudents(response.data);
            })
    }, []) 


    const moneyTime = () => {
        console.log('yerp')
    }


    return (
        <div>
            <input className='search-bar' type='text' placeholder='Search by name...' onChange={moneyTime} />
            <div>
                {students.map((student) => {
                        <div>
                            {student.firstName}
                        </div>
                })}
            </div>
        </div>
    )
}

export default SearchBar


