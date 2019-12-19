import React, {Component} from 'react';
import './App.css';
import FlightInfo from './Components/FlightInfo'
import FlightContainer from './Containers/FlightContainer'
import HomePage from './Containers/HomePage'
import Login from './Components/Login'
import Signup from './Components/Signup'
import UserContainer from './Containers/UserContainer'
import NavBar from './Containers/NavBar'
import {Route, Switch} from 'react-router-dom'
import { resolveNaptr } from 'dns';

class App extends Component {

  state = {
    currentUser: null,
    loggedIn: false
  }

  componentDidMount(){
    const user_id = localStorage.user_id

    if (user_id){
      fetch('http://localhost:4000/api/v1/auto_login', {
        headers: {
          "Authorization": user_id
        }
      })
      .then(resp=>resp.json())
      .then(response=>{
        if (response.errors){
          alert(response.errors)
        }else{
          this.setState({
            currentUser: response,
            loggedIn: true
          })
        }
      })
    }
  }

  handleClick = ()=>{
    this.setState({
      currentUser: null,
      loggedIn: false
    }, ()=>{
      localStorage.removeItem("user_id")
      // localStorage.user_id = null
      this.props.history.push('/home')
    })
  }

  setUser = (user)=>{
    this.setState({
        currentUser: user,
        loggedIn: true
    }, ()=>{
      localStorage.user_id = user.id
      this.props.history.push('/home')
    })
  }

  renderLogin = ()=>{
      return <Login setUser={this.setUser}/>
  }

  renderSignup = ()=>{
      return <Signup setUser={this.setUser} />
  }

  

  render(){
    console.log(this.state.currentUser)
  return (
    <div className="App">
      <NavBar loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} handleClick={this.handleClick}/>
      <HomePage />
      <Switch>
        
        <Route path='/signup' render={this.renderSignup} />
        <Route path='/login' render={this.renderLogin} />
      </Switch>
    </div>
  )
  }
}

export default App;
