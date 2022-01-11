import React from 'react';
import './PostList.css';
import { StudentComponent } from './StudentComponent';

function SearchBar() {

    return (
        <div>
            <input className='search-bar' type='text' id='filterInput' placeholder='Search by name'>
            </input>
            <StudentComponent />
            <p></p>
        </div>
    )
}

export default SearchBar