import React, { Component } from 'react';
import './PostList.css';

export class PostListTwo extends Component {
    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;
            
            const { city: cityFive, company: companyFive, email: emailFive, firstName: firstNameFive, id: idFive, lastName: lastNameFive, skill: skillFive } = students[5]
            const { city: citySix, company: companySix, email: emailSix, firstName: firstNameSix, id: idSix, lastName: lastNameSix, skill: skillSix } = students[6]
            const { city: citySeven, company: companySeven, email: emailSeven, firstName: firstNameSeven, id: idSeven, lastName: lastNameSeven, skill: skillSeven } = students[7]
            const { city: cityEight, company: companyEight, email: emailEight, firstName: firstNameEight, id: idEight, lastName: lastNameEight, skill: skillEight } = students[8]
            const { city: cityNine, company: companyNine, email: emailNine, firstName: firstNameNine, id: idNine, lastName: lastNameNine, skill: skillNine } = students[9]

            function findAverage(array) {
                let average = 0;
                for(let i = 0; i < array.length; i++) {
                    let currentNum = array[i]
                    average += currentNum;
                }
                average = average / array.length;
                return average
            }
        }

        return (
            <div>
                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg'></img><br />
                    <span id='id-name'></span>
                    <h1>
                        <span id='whole-name'></span><br />
                    </h1>
                    <p><span id='city-name'></span></p>
                    <p><span id='email-name'></span></p>
                    <p><span id='company-name'></span></p>
                    <span id='skill-name'></span>
                    <p>Average:<span id='average-grades'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg'></img><br />
                    <span></span>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nesciuntrerumlibero.jpg'></img><br />
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg'></img><br />
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/doloribusquitempora.jpg'></img><br />
                </div>
            </div>
        )
}}

export default PostListTwo

