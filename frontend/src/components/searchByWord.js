import React from 'react';
import axios from 'axios'
import Post from "./Post"

class SearchByWord extends React.Component{
  constructor(props){
    super(props)
    this.state={
      posts:[],
      fetched:false
    }

    const word=this.props.match.params.word


    this.componentDidMount=()=>{
      axios.get("http://localhost:2000/search/"+word).then((res)=>{
          this.setState({posts:res.data,fetched:true})
  
      })
      .catch(err=>{
          console.log(err)
      })
  }


  }


  
  render(){
    const postArray=this.state.posts.map((post)=>{
      return <Post id={post.id} Title={post.Title} Brief={post.Brief} Image={post.Image}/>
  })
  return(
      <React.Fragment>
      {/* <Navbar></Navbar> */}
      <div>
          {postArray}
      </div>
      </React.Fragment>
  )
  
  }
}


export default SearchByWord