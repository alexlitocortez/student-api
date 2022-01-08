import React, { useState, useEffect } from 'react';
import './PostList.css';

function SearchBar() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <input className='search-bar' type='text' id='filterInput' placeholder='Search by name'>
            </input>
            
            {/* {data.map((item) => (
                <div key={item.id}>
                    {item.firstName}
                </div>
            ))} */}
        </div>
    )
}

export default SearchBar
