import React, { Component } from 'react';
import './PostList.css';

export class PostListTwo extends Component {

    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;
            
            const { city: cityFive, company: companyFive, email: emailFive, firstName: firstNameFive, lastName: lastNameFive, skill: skillFive } = students[5]
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

            const averageStudentFive = findAverage([97, 92, 72, 99, 92, 92, 79, 96]); 

            document.getElementById('city-name-five').textContent = cityFive;
            document.getElementById('whole-name-five').textContent = firstNameFive + " " + lastNameFive;
            document.getElementById('company-name-five').textContent = companyFive;
            document.getElementById('email-name-five').textContent = emailFive;
            document.getElementById('skill-name-five').textContent = skillFive;
            document.getElementById('average-grades-five').textContent = " " + averageStudentFive;

            const averageStudentSix = findAverage([74, 95, 75, 95, 85, 97, 88, 85]); 

            document.getElementById('city-name-six').textContent = citySix;
            document.getElementById('whole-name-six').textContent = firstNameSix + " " + lastNameSix;
            document.getElementById('company-name-six').textContent = companySix;
            document.getElementById('email-name-six').textContent = emailSix;
            document.getElementById('skill-name-six').textContent = skillSix;
            document.getElementById('average-grades-six').textContent = " " + averageStudentSix;

            const averageStudentSeven = findAverage([80, 100, 97, 78, 99, 99, 76, 85]); 

            document.getElementById('city-name-seven').textContent = citySeven;
            document.getElementById('whole-name-seven').textContent = firstNameSeven + " " + lastNameSeven;
            document.getElementById('company-name-seven').textContent = companySeven;
            document.getElementById('email-name-seven').textContent = emailSeven;
            document.getElementById('skill-name-seven').textContent = skillSeven;
            document.getElementById('average-grades-seven').textContent = " " + averageStudentSeven;

            const averageStudentEight = findAverage([70, 100, 75, 96, 83, 90, 94, 92]); 

            document.getElementById('city-name-eight').textContent = cityEight;
            document.getElementById('whole-name-eight').textContent = firstNameEight + " " + lastNameEight;
            document.getElementById('company-name-eight').textContent = companyEight;
            document.getElementById('email-name-eight').textContent = emailEight;
            document.getElementById('skill-name-eight').textContent = skillEight;
            document.getElementById('average-grades-eight').textContent = " " + averageStudentEight;

            const averageStudentNine = findAverage([70, 99, 81, 83, 78, 95, 81, 76]); 

            document.getElementById('city-name-nine').textContent = cityNine;
            document.getElementById('whole-name-nine').textContent = firstNameNine + " " + lastNameNine;
            document.getElementById('company-name-nine').textContent = companyNine;
            document.getElementById('email-name-nine').textContent = emailNine;
            document.getElementById('skill-name-nine').textContent = skillNine;
            document.getElementById('average-grades-nine').textContent = " " + averageStudentNine;
        }

        getStudentInfo();

        return (
            <div>
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg'></img><br />
                    </div>


                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-five'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-five'></span></p>
                            <p><span id='email-name-five'></span></p>
                            <p><span id='company-name-five'></span></p>
                            <span id='skill-name-five'></span>
                            <p>Average:<span id='average-grades-five'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img  className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-six'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-six'></span></p>
                            <p><span id='email-name-six'></span></p>
                            <p><span id='company-name-six'></span></p>
                            <span id='skill-name-six'></span>
                            <p>Average:<span id='average-grades-six'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nesciuntrerumlibero.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-seven'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-seven'></span></p>
                            <p><span id='email-name-seven'></span></p>
                            <p><span id='company-name-seven'></span></p>
                            <span id='skill-name-seven'></span>
                            <p>Average:<span id='average-grades-seven'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-eight'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-eight'></span></p>
                            <p><span id='email-name-eight'></span></p>
                            <p><span id='company-name-eight'></span></p>
                            <span id='skill-name-eight'></span>
                            <p>Average:<span id='average-grades-eight'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/doloribusquitempora.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-nine'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-nine'></span></p>
                            <p><span id='email-name-nine'></span></p>
                            <p><span id='company-name-nine'></span></p>
                            <span id='skill-name-nine'></span>
                            <p>Average:<span id='average-grades-nine'></span>%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}}

export default PostListTwo

