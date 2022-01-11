import React, { Component } from 'react';
import './PostList.css';

export class PostList extends Component {

    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;

            const { city, company, email, firstName, lastName, skill } = students[0]
            const { city: cityOne, company: companyOne, email: emailOne, firstName: firstNameOne, lastName: lastNameOne, skill: skillOne } = students[1]
            const { city: cityTwo, company: companyTwo, email: emailTwo, firstName: firstNameTwo, lastName: lastNameTwo, skill: skillTwo } = students[2]
            const { city: cityThree, company: companyThree, email: emailThree, firstName: firstNameThree, lastName: lastNameThree, skill: skillThree } = students[3]
            const { city: cityFour, company: companyFour, email: emailFour, firstName: firstNameFour, lastName: lastNameFour, skill: skillFour } = students[4]

            // Function for getting the average of a student's grades
            
            function findAverage(array) {
                let average = 0;
                for(let i = 0; i < array.length; i++) {
                    let currentNum = array[i]
                    average += currentNum;
                }
                average = average / array.length;
                return average
            }

            const averageStudent = findAverage([78, 100, 92, 86, 89, 88, 91, 87]); 

            document.getElementById('city-name').textContent = city;
            document.getElementById('whole-name').textContent = firstName + " " + lastName;
            document.getElementById('company-name').textContent = company;
            document.getElementById('email-name').textContent = email;
            document.getElementById('skill-name').textContent = skill;
            document.getElementById('average-grades').textContent = " " + averageStudent;

            const averageStudentOne = findAverage([75, 89, 95, 93, 99, 82, 89, 76]);

            document.getElementById('city-name-one').textContent = cityOne;
            document.getElementById('whole-name-one').textContent = firstNameOne + " " + lastNameOne;
            document.getElementById('company-name-one').textContent = companyOne;
            document.getElementById('email-name-one').textContent = emailOne;
            document.getElementById('skill-name-one').textContent = skillOne;
            document.getElementById('average-grades-one').textContent = " " + averageStudentOne;

            const averageStudentTwo = findAverage([88, 90, 79, 82, 81, 99, 94, 73]);

            document.getElementById('city-name-two').textContent = cityTwo;
            document.getElementById('whole-name-two').textContent = firstNameTwo + " " + lastNameTwo;
            document.getElementById('company-name-two').textContent = companyTwo;
            document.getElementById('email-name-two').textContent = emailTwo;
            document.getElementById('skill-name-two').textContent = skillTwo;
            document.getElementById('average-grades-two').textContent = " " + averageStudentTwo;

            const averageStudentThree = findAverage([88, 93, 92, 81, 95, 98, 77, 94]);

            document.getElementById('city-name-three').textContent = cityThree;
            document.getElementById('whole-name-three').textContent = firstNameThree + " " + lastNameThree;
            document.getElementById('company-name-three').textContent = companyThree;
            document.getElementById('email-name-three').textContent = emailThree;
            document.getElementById('skill-name-three').textContent = skillThree;
            document.getElementById('average-grades-three').textContent = " " + averageStudentThree;

            const averageStudentFour = findAverage([71, 81, 72, 92, 79, 82, 91, 90]);

            document.getElementById('city-name-four').textContent = cityFour;
            document.getElementById('whole-name-four').textContent = firstNameFour + " " + lastNameFour;
            document.getElementById('company-name-four').textContent = companyFour;
            document.getElementById('email-name-four').textContent = emailFour;
            document.getElementById('skill-name-four').textContent = skillFour;
            document.getElementById('average-grades-four').textContent = " " + averageStudentFour;
        }

        getStudentInfo();

        return (
            <div>
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg' alt='student-one'></img>
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name'></span></p>
                            <p><span id='email-name'></span></p>
                            <p><span id='company-name'></span></p>
                            <span id='skill-name'></span>
                            <p>Average:<span id='average-grades'></span>%</p>
                        </div>
                    </div>
                </div>
                <br className='student-profile-divider' />
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg' alt='student-two'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-one'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-one'></span></p>
                            <p><span id='email-name-one'></span></p>
                            <p><span id='company-name-one'></span></p>
                            <span id='skill-name-one'></span>
                            <p>Average:<span id='average-grades-one'></span>%</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg' alt='student-three'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-two'></span>
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-two'></span></p>
                            <p><span id='email-name-two'></span></p>
                            <p><span id='company-name-two'></span></p>
                            <span id='skill-name-two'></span>
                            <p>Average:<span id='average-grades-two'></span>%</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg' alt='student-four'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-three'></span>
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-three'></span></p>
                            <p><span id='email-name-three'></span></p>
                            <p><span id='company-name-three'></span></p>
                            <span id='skill-name-three'></span>
                            <p>Average:<span id='average-grades-three'></span>%</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/consequaturdelectusquis.jpg' alt='student-five'></img><br />
                    </div>
                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-four'></span>
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-four'></span></p>
                            <p><span id='email-name-four'></span></p>
                            <p><span id='company-name-four'></span></p>
                            <span id='skill-name-four'></span>
                            <p>Average:<span id='average-grades-four'></span>%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}}


export default PostList

