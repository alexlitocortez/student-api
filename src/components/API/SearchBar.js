import axios from 'axios';
import './PostList.css';
import React, { useState, useEffect } from 'react';

function SearchBar() {
    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const [showResults, setShowResults] = useState('false');

    const [showButton, setShowButton] = useState();


    function toggleStudentGrades(idx) {
        if (showResults === idx) {
            setShowResults();
        } else {
            setShowResults(idx);
        }
    }

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
            .then((response) => {
                setAPIData(response.data.students);
                console.log(response.data.students);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
        } else {
            setFilteredResults(APIData)
        }
    }

    function findAverage(array) {
        let average = 0;
        for(let i = 0; i < array.length; i++) {
            let currentNum = Number(array[i])
            average += currentNum;
        }
        average = average / array.length;
        return average
    }
    return (
        <div>
            <input className='search-bar' placeholder='Search by name' onChange={(e) => searchItems(e.target.value)} />
                <div>
                {searchInput.length > 1 ? (
                    filteredResults.map((item, idx) => {
                        return (
                            <div className='student-block-one'>
                                <div className='student-image-border'>
                                    <img className='student-image' src={item.pic}></img>
                                </div>
                            <div className='student-info'>
                                    <div className='name-container'>
                                        <h1>
                                            <span>{item.firstName + " " + item.lastName}</span><br />
                                        </h1>
                                        <button className='student-button' 
                                        onClick={() => {
                                            if (showResults === idx) {
                                                setShowResults();
                                            } else {
                                                setShowResults(idx)
                                            }
                                        }}>
                                        </button>
                                    </div>
                                <div className='student-contact-info'>
                                    <p><span>{item.city}</span></p>
                                    <p><span>{item.email}</span></p>
                                    <p><span>{item.company}</span></p>
                                    <span>{item.skill}</span>
                                    <p>Average: <span>{findAverage(item.grades)}</span>%</p>
                                </div>
                                <div className={showResults === idx ? 'hide' : 'grade-container'}>
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
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item, idx) => {
                        return (
                            <div className='student-block-one' key={idx}>
                                <div className='student-image-border'>
                                    <img className='student-image' src={item.pic}></img>
                                </div>
                                <div className='student-info'>
                                    <div className='name-container'>
                                        <h1>
                                            <span>{item.firstName + " " + item.lastName}</span><br />
                                        </h1>
                                        <button className='student-button' 
                                        onClick={toggleStudentGrades}>
                                        </button>
                                    </div>
                                    <div className='student-contact-info'>
                                        <p><span>{item.city}</span></p>
                                        <p><span>{item.email}</span></p>
                                        <p><span>{item.company}</span></p>
                                        <span>{item.skill}</span>
                                        <p>Average: <span>{findAverage(item.grades)}</span>%</p>
                                    </div>
                                    <div className={showResults === idx ? 'hide' : 'grade-container'}>
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
                            </div>
                        )
                    })
                )}
                </div>
        </div>
    )
}

export default SearchBar


// Put multiple function in onClick (one for the hiding/showing grades, and one for the change in the +/- sign)

