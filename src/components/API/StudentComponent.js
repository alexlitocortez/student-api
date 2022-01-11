import React from 'react';

export const StudentComponent = (students) => {
    return (
        <div>
            <div className='student-info'>
                <h1>
                    <span></span><br/>
                </h1>
                <div className='student-contact-info'>
                    <p><span>{students.city}</span></p>
                    <p><span>{students.email}</span></p>
                    <p><span>{students.company}</span></p>
                    <p><span>{students.skill}</span></p>
                    <p>Average:<span></span></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}