import React, { Component } from 'react';
import './PostList.css';

export class PostListFour extends Component {
    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;

            const { city: cityFifteen, company: companyFifteen, email: emailFifteen, firstName: firstNameFifteen, lastName: lastNameFifteen, skill: skillFifteen } = students[15]
            const { city: citySixteen, company: companySixteen, email: emailSixteen, firstName: firstNameSixteen, lastName: lastNameSixteen, skill: skillSixteen } = students[16]
            const { city: citySeventeen, company: companySeventeen, email: emailSeventeen, firstName: firstNameSeventeen, lastName: lastNameSeventeen, skill: skillSeventeen } = students[17]
            const { city: cityEightteen, company: companyEightteen, email: emailEightteen, firstName: firstNameEightteen, lastName: lastNameEightteen, skill: skillEightteen } = students[18]
            const { city: cityNineteen, company: companyNineteen, email: emailNineteen, firstName: firstNameNineteen, lastName: lastNameNineteen, skill: skillNineteen } = students[19]

            function findAverage(array) {
                let average = 0;
                for(let i = 0; i < array.length; i++) {
                    let currentNum = array[i]
                    average += currentNum;
                }
                average = average / array.length;
                return average
            }

            const averageStudentFifteen = findAverage([88, 74, 76, 89, 75, 97, 75, 88]); 

            document.getElementById('city-name-fifteen').textContent = cityFifteen;
            document.getElementById('whole-name-fifteen').textContent = firstNameFifteen + " " + lastNameFifteen;
            document.getElementById('company-name-fifteen').textContent = companyFifteen;
            document.getElementById('email-name-fifteen').textContent = emailFifteen;
            document.getElementById('skill-name-fifteen').textContent = skillFifteen;
            document.getElementById('average-grades-fifteen').textContent = " " + averageStudentFifteen;

            const averageStudentSixteen = findAverage([78, 92, 86, 80, 82, 95, 76, 84]); 

            document.getElementById('city-name-sixteen').textContent = citySixteen;
            document.getElementById('whole-name-sixteen').textContent = firstNameSixteen + " " + lastNameSixteen;
            document.getElementById('company-name-sixteen').textContent = companySixteen;
            document.getElementById('email-name-sixteen').textContent = emailSixteen;
            document.getElementById('skill-name-sixteen').textContent = skillSixteen;
            document.getElementById('average-grades-sixteen').textContent = " " + averageStudentSixteen;

            const averageStudentSeventeen = findAverage([84, 82, 92, 74, 87, 98, 86, 73]); 

            document.getElementById('city-name-seventeen').textContent = citySeventeen;
            document.getElementById('whole-name-seventeen').textContent = firstNameSeventeen + " " + lastNameSeventeen;
            document.getElementById('company-name-seventeen').textContent = companySeventeen;
            document.getElementById('email-name-seventeen').textContent = emailSeventeen;
            document.getElementById('skill-name-seventeen').textContent = skillSeventeen;
            document.getElementById('average-grades-seventeen').textContent = " " + averageStudentSeventeen;

            const averageStudentEightteen = findAverage([100, 75, 84, 91, 100, 97, 98, 87]); 

            document.getElementById('city-name-eightteen').textContent = cityEightteen;
            document.getElementById('whole-name-eightteen').textContent = firstNameEightteen + " " + lastNameEightteen;
            document.getElementById('company-name-eightteen').textContent = companyEightteen;
            document.getElementById('email-name-eightteen').textContent = emailEightteen;
            document.getElementById('skill-name-eightteen').textContent = skillEightteen;
            document.getElementById('average-grades-eightteen').textContent = " " + averageStudentEightteen;

            const averageStudentNineteen = findAverage([89, 81, 77, 93, 96, 96, 70, 79]); 

            document.getElementById('city-name-nineteen').textContent = cityNineteen;
            document.getElementById('whole-name-nineteen').textContent = firstNameNineteen + " " + lastNameNineteen;
            document.getElementById('company-name-nineteen').textContent = companyNineteen;
            document.getElementById('email-name-nineteen').textContent = emailNineteen;
            document.getElementById('skill-name-nineteen').textContent = skillNineteen;
            document.getElementById('average-grades-nineteen').textContent = " " + averageStudentNineteen;
        }

        getStudentInfo();

        return (
            <div>
                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-fifteen'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-fifteen'></span></p>
                            <p><span id='email-name-fifteen'></span></p>
                            <p><span id='company-name-fifteen'></span></p>
                            <span id='skill-name-fifteen'></span>
                            <p>Average:<span id='average-grades-fifteen'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-sixteen'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-sixteen'></span></p>
                            <p><span id='email-name-sixteen'></span></p>
                            <p><span id='company-name-sixteen'></span></p>
                            <span id='skill-name-sixteen'></span>
                            <p>Average:<span id='average-grades-sixteen'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-seventeen'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-seventeen'></span></p>
                            <p><span id='email-name-seventeen'></span></p>
                            <p><span id='company-name-seventeen'></span></p>
                            <span id='skill-name-seventeen'></span>
                            <p>Average:<span id='average-grades-seventeen'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/remtemporavelit.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-eightteen'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-eightteen'></span></p>
                            <p><span id='email-name-eightteen'></span></p>
                            <p><span id='company-name-eightteen'></span></p>
                            <span id='skill-name-eightteen'></span>
                            <p>Average:<span id='average-grades-eightteen'></span>%</p>
                        </div>
                    </div>
                </div>

                <div className='student-block-one'>
                    <div className='student-image-border'>
                        <img className='student-image' src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/etporroalias.jpg'></img><br />
                    </div>

                    <div className='student-info'>
                        <h1>
                            <span id='whole-name-nineteen'></span><br />
                        </h1>
                        <div className='student-contact-info'>
                            <p><span id='city-name-nineteen'></span></p>
                            <p><span id='email-name-nineteen'></span></p>
                            <p><span id='company-name-nineteen'></span></p>
                            <span id='skill-name-nineteen'></span>
                            <p>Average:<span id='average-grades-nineteen'></span>%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostListFour
