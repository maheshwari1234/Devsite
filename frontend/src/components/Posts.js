import React from 'react';
import axios from 'axios'
import Post from "./Post"
import Navbar from "./Navbar";
class abc extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: [],
        }
        this.componentDidMount = () => {
            axios.get("http://localhost:2000/getData").then((res) => {
                this.setState({ posts: res.data })

            })
                .catch(err => {
                    console.log(err)
                })

        }
    }


    render() {
        const postArray = this.state.posts.map((post) => {
            return <Post id={post.id} Title={post.Title} Brief={post.Brief} Image={post.Image} />
        })
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div>
                    {postArray}
                </div>
            </React.Fragment>
        )

    }
}
export default abc;