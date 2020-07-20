import React from 'react'
import { connect } from "react-redux"
import Post from './Post'
import Navbar from './Navbar'

const About = (props) => {
    const postArray = props.PostsProp.map((post) => {
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

const mapStateToProps = (state) => {
    return {
        PostsProp: state.post.posts
    }
}


export default connect(mapStateToProps)(About);