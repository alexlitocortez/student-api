import axios from 'axios';
import './PostList.css';
import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import StudentButton from './StudentButton';

function SearchBar() {
    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

    const [tagInput, setTagInput] = useState('');
    const [filteredTag, setFilteredTag] = useState([])

    const [open, setOpen] = useState([])  

    // function toggleOpen(id) {
    //     if (open.includes(id)) {
    //         setOpen(open.filter(sid => sid !== id))
    //     } else {
    //         let newOpen = [...open]
    //         newOpen.push(id)
    //         setOpen(newOpen)
    //     }
    // }

    useEffect(() => {
    axios.get('https://api.hatchways.io/assessment/students')
            .then((response) => {
            setAPIData(response.data.students);
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

    const searchTags = (tagValue) => {
        setTagInput(tagValue)
        if (tagInput !== '') {
            const tagOne = document.getElementById('valueOne').innerHTML
            const filteredTags = filteredTag.filter((item) => {
                return 
        })
        setFilteredTag(filteredTags)
        }
    }

// Put tag information in filteredTag variable


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
            <input className='search-bar' placeholder='Search by tag' onChange={(e) => searchTags(e.target.value)} />
                <div>
                {searchInput.length > 1 ? (
                    filteredResults.map((item, id) => {
                        return (
                            <div className='student-block-one' key={id}>
                                <div className='student-image-border'>
                                    <img className='student-image' src={item.pic}></img>
                                </div>
                            <div className='student-info'>
                                    <div className='name-container'>
                                        <h1>
                                            <span>{item.firstName + " " + item.lastName}</span><br />
                                        </h1>
                                        <StudentButton />
                                    </div>
                                <div className='student-contact-info'>
                                    <p><span>{item.city}</span></p>
                                    <p><span>{item.email}</span></p>
                                    <p><span>{item.company}</span></p>
                                    <span>{item.skill}</span>
                                    <p>Average: <span>{findAverage(item.grades)}</span>%</p>
                                </div>
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
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item, id) => {
                        return (
                            <div className='student-block-one' key={id}>
                                <div className='student-image-border'>
                                    <img className='student-image' src={item.pic}></img>
                                </div>
                                <div className='student-info'>
                                    <div className='name-container'>
                                        <h1>
                                            <span>{item.firstName + " " + item.lastName}</span><br />
                                        </h1>
                                        <StudentButton />
                                    </div>
                                    <div className='student-contact-info'>
                                        <p>Average: <span>{findAverage(item.grades)}</span>%</p>
                                        <p><span>{item.city}</span></p>
                                        <p><span>{item.email}</span></p>
                                        <p><span>{item.company}</span></p>
                                        <span>{item.skill}</span>
                                    </div>
                                    {/* <div className={open.includes(id) ? 'hide' : 'grade-container'}>
                                        <p>Test 1: <span>{item.grades[0]}</span>%</p>
                                        <p>Test 2: <span>{item.grades[1]}</span>%</p>
                                        <p>Test 3: <span>{item.grades[2]}</span>%</p>
                                        <p>Test 4: <span>{item.grades[3]}</span>%</p>
                                        <p>Test 5: <span>{item.grades[4]}</span>%</p>
                                        <p>Test 6: <span>{item.grades[5]}</span>%</p>
                                        <p>Test 7: <span>{item.grades[6]}</span>%</p>
                                        <p>Test 8: <span>{item.grades[7]}</span>%</p>
                                    </div> */}
                                    <div>
                                        <InputField />
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

