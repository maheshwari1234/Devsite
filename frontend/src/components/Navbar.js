import React from 'react';
import {Redirect } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';

const login=localStorage.getItem("login")
const logout=localStorage.getItem("logout")

class Navbarr extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "",
            clicked:false,
            login:login,
            logout:logout
        }  
    }
    
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ ...this.state, [name]: value } )
    }

    submit=()=>{
          this.setState({clicked:true})
    }

store=(key,value)=>{
    localStorage.setItem(key,value)
}

logout=()=>{
        this.setState({logout:true,login:false})
        this.store('logout',true)
        this.store('login',false)
        
        
    }
    
    render() {
        if(this.state.clicked){
            const word=this.state.word
            return <Redirect to={`/search/${word}`}/>
        }
        if(!this.state.login){
            return <Redirect to="/posts"/>
        }
       
        return (
            <React.Fragment>
            <Navbar bg="secondary" variant="dark">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={this.handleChange} name="word" />
                    <Button variant="outline-light" onClick={this.submit}>Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <NavDropdown title="Posts by category" value={this.state.value}>
        <NavDropdown.Item href="/t/React" value="React">React</NavDropdown.Item>
        <NavDropdown.Item href="/t/Javascript" value="Javascript">Javascript</NavDropdown.Item>
        <NavDropdown.Item href="/t/Bootstrap" value="Bootstrap">Bootstrap</NavDropdown.Item>
    
      </NavDropdown>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
     
                    <Nav className="ml-auto">
                    {/* <Nav.Item><Nav.Link href="/posts" style={{ color: "yellow" }}>Post</Nav.Link></Nav.Item> */}
                    

                        <Nav.Item><Nav.Link href="/new" style={{ color: "yellow" }}>Write a Post</Nav.Link></Nav.Item>
                        {localStorage.getItem("logout")?
                            <Nav.Item><Nav.Link href="/login" style={{ color: "yellow"}}>Login</Nav.Link></Nav.Item>:
                            <Button onClick={this.logout}>Logout</Button>
                        }
                         
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
            </React.Fragment>
        )
    }
}

export default Navbarr;