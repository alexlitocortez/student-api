import axios from 'axios';
import React, { useState, useEffect } from 'react';

function SearchBar() {
    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

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

    return (
        <div>
            <input className='search-bar' placeholder='Search by name...' onChange={(e) => searchItems(e.target.value)} />
                <div>
                    {searchInput.length > 1 ? (
                        filteredResults.map((item) => {
                            return (
                                <div>
                                    <div>{item.firstName + item.lastName}</div>
                                </div>
                            )
                        })
                    )}
                </div>
        </div>
    )
}



export default SearchBar


