import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Posts from "./components/Posts"
import IndPost from "./components/Indpost"
import NewPost from './components/newpost'
import Login from './components/login';
import Search from './components/search'
import Search2 from './components/searchByWord'
import Register from './components/Register'
import Home from './components/home'



const App=()=>{
  return(
<React.Fragment>

<BrowserRouter>
{/* <Navbar/> */}
<Switch>
<Route exact path="/" component={Posts}/>
<Route path="/home" component={Home}/>
<Route exact path="/posts" component={Posts}/>
<Route exact path="/t/:tag" component={Search}/>
<Route exact path="/search/:word" component={Search2}/>
<Route  path="/:id/:Title" component={IndPost}/>
<Route exact path="/new" component={NewPost}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/navbar" component={Navbar}/>


</Switch>
</BrowserRouter>
</React.Fragment>
  )
}
export default App;