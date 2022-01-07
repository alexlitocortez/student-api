import React, { Component } from 'react';
import './PostList.css';

export class PostListThree extends Component {

    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;

            const { city: cityTen, company: companyTen, email: emailTen, firstName: firstNameTen, id: idTen, lastName: lastNameTen, skill: skillTen } = students[10]
            const { city: cityEleven, company: companyEleven, email: emailEleven, firstName: firstNameEleven, id: idEleven, lastName: lastNameEleven, skill: skillEleven } = students[11]
            const { city: cityTwelve, company: companyTwelve, email: emailTwelve, firstName: firstNameTwelve, id: idTwelve, lastName: lastNameTwelve, skill: skillTwelve } = students[12]
            const { city: cityThirteen, company: companyThirteen, email: emailThirteen, firstName: firstNameThirteen, id: idThirteen, lastName: lastNameThirteen, skill: skillThirteen } = students[13]
            const { city: cityFourteen, company: companyFourteen, email: emailFourteen, firstName: firstNameFourteen, id: idFourteen, lastName: lastNameFourteen, skill: skillFourteen } = students[14]

            function findAverage(array) {
                let average = 0;
                for(let i = 0; i < array.length; i++) {
                    let currentNum = array[i]
                    average += currentNum;
                }
                average = average / array.length;
                return average
            }

            const averageStudentTen = findAverage([98, 93, 78, 87, 99, 89, 97, 81]); 

            document.getElementById('city-name-ten').textContent = cityTen;
            document.getElementById('id-name-ten').textContent = idTen;
            document.getElementById('whole-name-ten').textContent = firstNameTen + " " + lastNameTen;
            document.getElementById('company-name-ten').textContent = companyTen;
            document.getElementById('email-name-ten').textContent = emailTen;
            document.getElementById('skill-name-ten').textContent = skillTen;
            document.getElementById('average-grades-ten').textContent = " " + averageStudentTen;

            const averageStudentEleven = findAverage([83, 97, 70, 96, 75, 98, 90, 71]); 

            document.getElementById('city-name-eleven').textContent = cityEleven;
            document.getElementById('id-name-eleven').textContent = idEleven;
            document.getElementById('whole-name-eleven').textContent = firstNameEleven + " " + lastNameEleven;
            document.getElementById('company-name-eleven').textContent = companyEleven;
            document.getElementById('email-name-eleven').textContent = emailEleven;
            document.getElementById('skill-name-eleven').textContent = skillEleven;
            document.getElementById('average-grades-eleven').textContent = " " + averageStudentEleven;

            const averageStudentTwelve = findAverage([87, 73, 85, 98, 73, 95, 75, 97]); 

            document.getElementById('city-name-twelve').textContent = cityTwelve;
            document.getElementById('id-name-twelve').textContent = idTwelve;
            document.getElementById('whole-name-twelve').textContent = firstNameTwelve + " " + lastNameTwelve;
            document.getElementById('company-name-twelve').textContent = companyTwelve;
            document.getElementById('email-name-twelve').textContent = emailTwelve;
            document.getElementById('skill-name-twelve').textContent = skillTwelve;
            document.getElementById('average-grades-twelve').textContent = " " + averageStudentTwelve;

            const averageStudentThirteen = findAverage([90, 73, 88, 95, 71, 100, 80, 86]); 

            document.getElementById('city-name-thirteen').textContent = cityThirteen;
            document.getElementById('id-name-thirteen').textContent = idThirteen;
            document.getElementById('whole-name-thirteen').textContent = firstNameThirteen + " " + lastNameThirteen;
            document.getElementById('company-name-thirteen').textContent = companyThirteen;
            document.getElementById('email-name-thirteen').textContent = emailThirteen;
            document.getElementById('skill-name-thirteen').textContent = skillThirteen;
            document.getElementById('average-grades-thirteen').textContent = " " + averageStudentThirteen;

            const averageStudentFourteen = findAverage([78, 78, 96, 92, 80, 82, 91, 99]); 

            document.getElementById('city-name-fourteen').textContent = cityFourteen;
            document.getElementById('id-name-fourteen').textContent = idFourteen;
            document.getElementById('whole-name-fourteen').textContent = firstNameFourteen + " " + lastNameFourteen;
            document.getElementById('company-name-fourteen').textContent = companyFourteen;
            document.getElementById('email-name-fourteen').textContent = emailFourteen;
            document.getElementById('skill-name-fourteen').textContent = skillFourteen;
            document.getElementById('average-grades-fourteen').textContent = " " + averageStudentFourteen;

        }

        getStudentInfo();

        return (
            <div>
                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg'></img><br />
                    <span id='id-name-ten'></span>
                    <h1>
                        <span id='whole-name-ten'></span><br />
                    </h1>
                    <p><span id='city-name-ten'></span></p>
                    <p><span id='email-name-ten'></span></p>
                    <p><span id='company-name-ten'></span></p>
                    <span id='skill-name-ten'></span>
                    <p>Average:<span id='average-grades-ten'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg'></img><br />
                    <span id='id-name-eleven'></span>
                    <h1>
                        <span id='whole-name-eleven'></span><br />
                    </h1>
                    <p><span id='city-name-eleven'></span></p>
                    <p><span id='email-name-eleven'></span></p>
                    <p><span id='company-name-eleven'></span></p>
                    <span id='skill-name-eleven'></span>
                    <p>Average:<span id='average-grades-eleven'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg'></img><br />
                    <span id='id-name-twelve'></span>
                    <h1>
                        <span id='whole-name-twelve'></span><br />
                    </h1>
                    <p><span id='city-name-twelve'></span></p>
                    <p><span id='email-name-twelve'></span></p>
                    <p><span id='company-name-twelve'></span></p>
                    <span id='skill-name-twelve'></span>
                    <p>Average:<span id='average-grades-twelve'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nonipsaet.jpg'></img><br />
                    <span id='id-name-thirteen'></span>
                    <h1>
                        <span id='whole-name-thirteen'></span><br />
                    </h1>
                    <p><span id='city-name-thirteen'></span></p>
                    <p><span id='email-name-thirteen'></span></p>
                    <p><span id='company-name-thirteen'></span></p>
                    <span id='skill-name-thirteen'></span>
                    <p>Average:<span id='average-grades-thirteen'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg'></img><br />
                    <span id='id-name-fourteen'></span>
                    <h1>
                        <span id='whole-name-fourteen'></span><br />
                    </h1>
                    <p><span id='city-name-fourteen'></span></p>
                    <p><span id='email-name-fourteen'></span></p>
                    <p><span id='company-name-fourteen'></span></p>
                    <span id='skill-name-fourteen'></span>
                    <p>Average:<span id='average-grades-fourteen'></span>%</p>
                </div>
            </div>
        )
    }
}

export default PostListThree
