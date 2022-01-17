import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
            .then((response) => {
                setAPIData(response.data);
            }
            catch(error) {
                console.log(error.message);
            }
    }, [])


    return (
        <div>
            <input className='search-bar' placeholder='Search by name...' />
            {/* {students.map((student) => {
                return (
                    <p>{student}</p>
                )
            })} */}
        </div>
    )
}

export default SearchBar





