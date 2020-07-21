import React from "react";
import {Image,Card} from "react-bootstrap";
import axios from 'axios';
import Navbar from './Navbar'


class IndividualPost extends React.Component{

    constructor(props){
        super(props);
        this.state={
            posts:[],
        }

        const id=this.props.match.params.id
        this.componentDidMount=()=>{
            axios.get("http://localhost:2000/posts/"+id).then((res)=>{
                this.setState({posts:res.data[0]})

            })
            .catch(err=>{
                console.log(err)
            })

        }
    }

    render(){


   const posts=this.state.posts
        return(
            <React.Fragment>
            <Navbar></Navbar>
          <div className="row">
              <Card>
              <div className="offset-2 col-sm-6">
                  <Card.Title>
        <h2>{posts.Title}</h2>
                  </Card.Title>
                  <Card.Body>
        <Image src={`/${posts.Image}`} alt="image not found"/><br/><br/>
        <h5 style={{justifyContent:"center"}}>{posts.Body}</h5>
                  </Card.Body>
              </div>
              </Card>

          </div>
        </React.Fragment>

        )

    

              
            
    }
}





export default IndividualPost
