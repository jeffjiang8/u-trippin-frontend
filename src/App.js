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

class App extends Component {

  state = {
    currentUser: null,
    loggedIn: false
  }

  handleClick = ()=>{
    this.setState({
      currentUser: null,
      loggedIn: false
    }, ()=>{this.props.history.push('/home')})
  }

  setUser = (user)=>{
    this.setState({
        currentUser: user,
        loggedIn: true
    }, ()=>{this.props.history.push('/home')})
  }

  renderLogin = ()=>{
      return <Login setUser={this.setUser}/>
  }

  renderSignup = ()=>{
      return <Signup setUser={this.setUser} />
  }

  

  // renderUserPage = ()=>{
  //   return <UserContainer loggedIn={this.state.loggedIn}/>
  // }

  render(){
    console.log(this.state.currentUser)
  return (
    <div className="App">
      <NavBar loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} loggedIn={this.state.loggedIn}/>
      <HomePage />
      <Switch>
        
        <Route path='/signup' render={this.renderSignup} />
        <Route path='/login' render={this.renderLogin} />
        
        <Route path='/:username' render={this.renderUserPage} />
      </Switch>
    </div>
  )
  }
}

export default App;
