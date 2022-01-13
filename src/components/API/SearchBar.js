import React, { useState, useEffect } from 'react';
import './PostList.css';

function SearchBar() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([])

    // Empty array means this useEffect will run once

    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {/* {items.map((item) => ( */}
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img></img>
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span></span>
                        </h1>
                        <div className='student-contact-info'>
                            <p><span></span></p>
                            <p><span></span></p>
                            <p><span></span></p>
                            <span></span>
                            <p>Average: <span></span>%</p>
                        </div>
                    </div>
                </div>
            </div>
    )}
}

export default SearchBar

