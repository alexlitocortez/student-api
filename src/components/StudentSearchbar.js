import React, { useEffect, useState } from 'react'
import './StudentSearchbar.css'
import axios from 'axios'  
import Student from './Student'

function SearchBar(item, id) {
    const [APIStudents, setAPIStudents] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
        .then((response) => {
            setAPIStudents(response.data.students)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
        const filteredData = APIStudents.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(APIStudents)
        }
    }
    
    return (
        <div>
            <input className='search-bar' placeholder='Search by name' onChange={(e) => searchItems(e.target.value)} />
                <div>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                        <div key={item.id}>
                            <Student />
                        </div>
                        )
                    })
                ) : (
                    <div>
                        <Student />
                    </div>
                )}
                </div>
        </div>
    )
}

export default SearchBar


