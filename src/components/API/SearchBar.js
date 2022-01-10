import React, { useState, useEffect } from 'react';
import './PostList.css';

function SearchBar() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then((res) => res.json())
            .then((data) => {
                setStudents(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        setFilteredStudents(
            Object.values(students).filter( student => {
                return <div className='student-block-one'>{student.name}</div>
            })
        )
    }, [search, students])

    return (
        <div>
            <input className='search-bar' type='text' id='filterInput' placeholder='Search by name'
            onChange={ e => setSearch(e.target.value) }>
            </input>
            
            {students.map((student, id)) => (
                <div key={id}>
                    {students.firstName}
                </div>
            )}
        </div>
    )
}

export default SearchBar
