import React, { Component } from 'react'
import axios from 'axios';

export class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             students: []
        }
    }
    

    componentDidMount() {
        axios.get('https://api.hatchways.io/assessment/students')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })

    }

    render() {

        const {students} = this.state

        return (
            <div>
                <h1>Student Profiles</h1>
                {
                    students.map(student => <div key={student.id}>
                        <p>City: {student.city}</p>,
                        Company: {student.company},
                        Email: {student.email},
                        firstName: {student.firstname},
                        lastName: {student.lastname},
                        pic: {student.pic},
                        skill: {student.skill}
                    </div>)
                }
            </div>
        )
}}


export default PostList

