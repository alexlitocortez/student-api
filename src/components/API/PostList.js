import React, { Component } from 'react'
import axios from 'axios';

export class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
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
        return (
            <div>
                {
                    posts.map(post => <div></div>)
                }
            </div>
        )
    }
}

export default PostList

