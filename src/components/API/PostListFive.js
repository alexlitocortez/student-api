import React, { Component } from 'react';
import './PostList.css';

export class PostListFive extends Component {
    render() {

        const api_url = 'https://api.hatchways.io/assessment/students';

        async function getStudentInfo() {
            const response = await fetch(api_url);
            const data = await response.json();
            const students = data.students;

            const { city: cityTwenty, company: companyTwenty, email: emailTwenty, firstName: firstNameTwenty, id: idTwenty, lastName: lastNameTwenty, skill: skillTwenty } = students[20]
            const { city: cityTwentyOne, company: companyTwentyOne, email: emailTwentyOne, firstName: firstNameTwentyOne, id: idTwentyOne, lastName: lastNameTwentyOne, skill: skillTwentyOne } = students[21]
            const { city: cityTwentyTwo, company: companyTwentyTwo, email: emailTwentyTwo, firstName: firstNameTwentyTwo, id: idTwentyTwo, lastName: lastNameTwentyTwo, skill: skillTwentyTwo } = students[22]
            const { city: cityTwentyThree, company: companyTwentyThree, email: emailTwentyThree, firstName: firstNameTwentyThree, id: idTwentyThree, lastName: lastNameTwentyThree, skill: skillTwentyThree } = students[23]
            const { city: cityTwentyFour, company: companyTwentyFour, email: emailTwentyFour, firstName: firstNameTwentyFour, id: idTwentyFour, lastName: lastNameTwentyFour, skill: skillTwentyFour } = students[24]


            function findAverage(array) {
                let average = 0;
                for(let i = 0; i < array.length; i++) {
                    let currentNum = array[i]
                    average += currentNum;
                }
                average = average / array.length;
                return average
            }

            const averageStudentTwenty = findAverage([81, 74, 77, 82, 74, 88, 86, 87]); 

            document.getElementById('city-name-twenty').textContent = cityTwenty;
            document.getElementById('id-name-twenty').textContent = idTwenty;
            document.getElementById('whole-name-twenty').textContent = firstNameTwenty + " " + lastNameTwenty;
            document.getElementById('company-name-twenty').textContent = companyTwenty;
            document.getElementById('email-name-twenty').textContent = emailTwenty;
            document.getElementById('skill-name-twenty').textContent = skillTwenty;
            document.getElementById('average-grades-twenty').textContent = " " + averageStudentTwenty;

            const averageStudentTwentyOne = findAverage([73, 99, 91, 92, 85, 96, 95, 73]); 

            document.getElementById('city-name-twentyone').textContent = cityTwentyOne;
            document.getElementById('id-name-twentyone').textContent = idTwentyOne;
            document.getElementById('whole-name-twentyone').textContent = firstNameTwentyOne + " " + lastNameTwentyOne;
            document.getElementById('company-name-twentyone').textContent = companyTwentyOne;
            document.getElementById('email-name-twentyone').textContent = emailTwentyOne;
            document.getElementById('skill-name-twentyone').textContent = skillTwentyOne;
            document.getElementById('average-grades-twentyone').textContent = " " + averageStudentTwentyOne;

            const averageStudentTwentyTwo = findAverage([100, 83, 76, 71, 93, 95, 73, 88]); 

            document.getElementById('city-name-twentytwo').textContent = cityTwentyTwo;
            document.getElementById('id-name-twentytwo').textContent = idTwentyTwo;
            document.getElementById('whole-name-twentytwo').textContent = firstNameTwentyTwo + " " + lastNameTwentyTwo;
            document.getElementById('company-name-twentytwo').textContent = companyTwentyTwo;
            document.getElementById('email-name-twentytwo').textContent = emailTwentyTwo;
            document.getElementById('skill-name-twentytwo').textContent = skillTwentyTwo;
            document.getElementById('average-grades-twentytwo').textContent = " " + averageStudentTwentyTwo;

            const averageStudentTwentyThree = findAverage([71, 80, 83, 99, 91, 95, 81, 75]); 

            document.getElementById('city-name-twentythree').textContent = cityTwentyThree;
            document.getElementById('id-name-twentythree').textContent = idTwentyThree;
            document.getElementById('whole-name-twentythree').textContent = firstNameTwentyThree + " " + lastNameTwentyThree;
            document.getElementById('company-name-twentythree').textContent = companyTwentyThree;
            document.getElementById('email-name-twentythree').textContent = emailTwentyThree;
            document.getElementById('skill-name-twentythree').textContent = skillTwentyThree;
            document.getElementById('average-grades-twentythree').textContent = " " + averageStudentTwentyThree;

            const averageStudentTwentyFour = findAverage([97, 71, 89, 85, 85, 87, 92, 75]); 

            document.getElementById('city-name-twentyfour').textContent = cityTwentyFour;
            document.getElementById('id-name-twentyfour').textContent = idTwentyFour;
            document.getElementById('whole-name-twentyfour').textContent = firstNameTwentyFour + " " + lastNameTwentyFour;
            document.getElementById('company-name-twentyfour').textContent = companyTwentyFour;
            document.getElementById('email-name-twentyfour').textContent = emailTwentyFour;
            document.getElementById('skill-name-twentyfour').textContent = skillTwentyFour;
            document.getElementById('average-grades-twentyfour').textContent = " " + averageStudentTwentyFour;
        }

        getStudentInfo();

        return (
            <div>
                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg'></img><br />
                    <span id='id-name-twenty'></span>
                    <h1>
                        <span id='whole-name-twenty'></span><br />
                    </h1>
                    <p><span id='city-name-twenty'></span></p>
                    <p><span id='email-name-twenty'></span></p>
                    <p><span id='company-name-twenty'></span></p>
                    <span id='skill-name-twenty'></span>
                    <p>Average:<span id='average-grades-twenty'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/delenitiestdolorum.jpg'></img><br />
                    <span id='id-name-twentyone'></span>
                    <h1>
                        <span id='whole-name-twentyone'></span><br />
                    </h1>
                    <p><span id='city-name-twentyone'></span></p>
                    <p><span id='email-name-twentyone'></span></p>
                    <p><span id='company-name-twentyone'></span></p>
                    <span id='skill-name-twentyone'></span>
                    <p>Average:<span id='average-grades-twentyone'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg'></img><br />
                    <span id='id-name-twentytwo'></span>
                    <h1>
                        <span id='whole-name-twentytwo'></span><br />
                    </h1>
                    <p><span id='city-name-twentytwo'></span></p>
                    <p><span id='email-name-twentytwo'></span></p>
                    <p><span id='company-name-twentytwo'></span></p>
                    <span id='skill-name-twentytwo'></span>
                    <p>Average:<span id='average-grades-twentytwo'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/etporroalias.jpg'></img><br />
                    <span id='id-name-twentythree'></span>
                    <h1>
                        <span id='whole-name-twentythree'></span><br />
                    </h1>
                    <p><span id='city-name-twentythree'></span></p>
                    <p><span id='email-name-twentythree'></span></p>
                    <p><span id='company-name-twentythree'></span></p>
                    <span id='skill-name-twentythree'></span>
                    <p>Average:<span id='average-grades-twentythree'></span>%</p>
                </div>

                <div className='student-block'>
                    <img src='https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg'></img><br />
                    <span id='id-name-twentyfour'></span>
                    <h1>
                        <span id='whole-name-twentyfour'></span><br />
                    </h1>
                    <p><span id='city-name-twentyfour'></span></p>
                    <p><span id='email-name-twentyfour'></span></p>
                    <p><span id='company-name-twentyfour'></span></p>
                    <span id='skill-name-twentyfour'></span>
                    <p>Average:<span id='average-grades-twentyfour'></span>%</p>
                </div>
            </div>
        )
    }
}

export default PostListFive
