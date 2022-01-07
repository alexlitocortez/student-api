import React, { Component } from 'react'
import './PostList.css';

export class PostList extends Component {

    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;

            const { city, company, email, firstName, id, lastName, skill } = students[0]
            const { city: cityOne, company: companyOne, email: emailOne, firstName: firstNameOne, id: idOne, lastName: lastNameOne, skill: skillOne } = students[1]

            const { city: cityTwo, company: companyTwo, email: emailTwo, firstName: firstNameTwo, id: idTwo, lastName: lastNameTwo, skill: skillTwo } = students[2]
            const { city: cityThree, company: companyThree, email: emailThree, firstName: firstNameThree, id: idThree, lastName: lastNameThree, skill: skillThree } = students[3]
            const { city: cityFour, company: companyFour, email: emailFour, firstName: firstNameFour, id: idFour, lastName: lastNameFour, skill: skillFour } = students[4]

            
            const { city: cityTen, company: companyTen, email: emailTen, firstName: firstNameTen, id: idTen, lastName: lastNameTen, skill: skillTen } = students[10]
            const { city: cityEleven, company: companyEleven, email: emailEleven, firstName: firstNameEleven, id: idEleven, lastName: lastNameEleven, skill: skillEleven } = students[11]
            const { city: cityTwelve, company: companyTwelve, email: emailTwelve, firstName: firstNameTwelve, id: idTwelve, lastName: lastNameTwelve, skill: skillTwelve } = students[12]
            const { city: cityThirteen, company: companyThirteen, email: emailThirteen, firstName: firstNameThirteen, id: idThirteen, lastName: lastNameThirteen, skill: skillThirteen } = students[13]
            const { city: cityFourteen, company: companyFourteen, email: emailFourteen, firstName: firstNameFourteen, id: idFourteen, lastName: lastNameFourteen, skill: skillFourteen } = students[14]
            const { city: cityFifteen, company: companyFifteen, email: emailFifteen, firstName: firstNameFifteen, id: idFifteen, lastName: lastNameFifteen, skill: skillFifteen } = students[15]
            const { city: citySixteen, company: companySixteen, email: emailSixteen, firstName: firstNameSixteen, id: idSixteen, lastName: lastNameSixteen, skill: skillSixteen } = students[16]
            const { city: citySeventeen, company: companySeventeen, email: emailSeventeen, firstName: firstNameSeventeen, id: idSeventeen, lastName: lastNameSeventeen, skill: skillSeventeen } = students[17]
            const { city: cityEighteen, company: companyEighteen, email: emailEighteen, firstName: firstNameEighteen, id: idEighteen, lastName: lastNameEighteen, skill: skillEighteen } = students[18]
            const { city: cityNineteen, company: companyNineteen, email: emailNineteen, firstName: firstNameNineteen, id: idNineteen, lastName: lastNameNineteen, skill: skillNineTeen } = students[19]
            const { city: cityTwenty, company: companyTwenty, email: emailTwenty, firstName: firstNameTwenty, id: idTwenty, lastName: lastNameTwenty, skill: skillTwenty } = students[20]
            const { city: cityTwentyOne, company: companyTwentyOne, email: emailTwentyOne, firstName: firstNameTwentyOne, id: idTwentyOne, lastName: lastNameTwentyOne, skill: skillTwentyOne } = students[21]
            const { city: cityTwentyTwo, company: companyTwentyTwo, email: emailTwentyTwo, firstName: firstNameTwentyTwo, id: idTwentyTwo, lastName: lastNameTwentyTwo, skill: skillTwentyTwo } = students[22]
            const { city: cityTwentyThree, company: companyTwentyThree, email: emailTwentyThree, firstName: firstNameTwentyThree, id: idTwentyThree, lastName: lastNameTwentyThree, skill: skillTwentyThree } = students[23]
            const { city: cityTwentyFour, company: companyTwentyFour, email: emailTwentyFour, firstName: firstNameTwentyFour, id: idTwentyFour, lastName: lastNameTwentyFour, skill: skillTwentyFour } = students[24]
            


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
            document.getElementById('id-name').textContent = id;
            document.getElementById('whole-name').textContent = firstName + " " + lastName;
            document.getElementById('company-name').textContent = company;
            document.getElementById('email-name').textContent = email;
            document.getElementById('skill-name').textContent = skill;
            document.getElementById('average-grades').textContent = " " + averageStudent;

            const averageStudentOne = findAverage([75, 89, 95, 93, 99, 82, 89, 76]);

            document.getElementById('city-name-one').textContent = cityOne;
            document.getElementById('id-name-one').textContent = idOne;
            document.getElementById('whole-name-one').textContent = firstNameOne + " " + lastNameOne;
            document.getElementById('company-name-one').textContent = companyOne;
            document.getElementById('email-name-one').textContent = emailOne;
            document.getElementById('skill-name-one').textContent = skillOne;
            document.getElementById('average-grades-one').textContent = " " + averageStudentOne;
        }

        getStudentInfo();




        return (
            <div>
                <h1>Student Profiles</h1>
                    <div className='student-block'>
                        <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg'></img><br />
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
                        <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg'></img><br />
                        <span id='id-name-one'></span>
                        <h1>
                            <span id='whole-name-one'></span><br />
                        </h1>
                        <p><span id='city-name-one'></span></p>
                        <p><span id='email-name-one'></span></p>
                        <p><span id='company-name-one'></span></p>
                        <span id='skill-name-one'></span>
                        <p>Average:<span id='average-grades-one'></span>%</p>
                    </div>

                    <div className='student-block'>
                        <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg'></img><br />
                        <span id='id-name-two'></span>
                        <h1>
                            <span id='whole-name-two'></span>
                        </h1>
                        <p><span id='city-name-two'></span></p>
                        <p><span id='email-name-two'></span></p>
                        <p><span id='company-name-two'></span></p>
                        <span id='skill-name-two'></span>
                        <p>Average:<span id='average-grades-two'></span>%</p>
                    </div>

                    <div className='student-block'>
                        <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg'></img><br />
                        <span id='id-name-three'></span>
                        <h1>
                            <span id='whole-name-three'></span>
                        </h1>
                        <p><span id='city-name-three'></span></p>
                        <p><span id='email-name-three'></span></p>
                        <p><span id='company-name-three'></span></p>
                        <span id='skill-name-three'></span>
                        <p>Average:<span id='average-grades-three'></span>%</p>
                    </div>

                    <div className='student-block'>
                        <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/consequaturdelectusquis.jpg'></img><br />
                        <span id='id-name-four'></span>
                        <h1>
                            <span id='whole-name-four'></span>
                        </h1>
                        <p><span id='city-name-four'></span></p>
                        <p><span id='email-name-four'></span></p>
                        <p><span id='company-name-four'></span></p>
                        <span id='skill-name-four'></span>
                        <p>Average:<span id='average-grades-four'></span>%</p>
                    </div>
            </div>
        )
}}


export default PostList

