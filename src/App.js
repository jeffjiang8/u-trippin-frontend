import React, {Component} from 'react';
import './App.css';
import HomePage from './Containers/HomePage'
import UserContainer from './Containers/UserContainer'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Containers/NavBar'
import TripInfo from './Containers/TripInfo'
import {Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: null,
    loggedIn: false,
    selectedTrip: null
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

  handleClickTrip = (trip)=>{
    this.setState({
        selectedTrip: trip
    })
}

  renderLogin = ()=>{
      return <Login setUser={this.setUser}/>
  }

  renderSignup = ()=>{
      return <Signup setUser={this.setUser} />
  }

  renderUserPage = ()=>{
    return <UserContainer currentUser={this.state.currentUser} handleClick={this.handleClickTrip}/>
  }

  renderTripInfo = ()=>{
    return <TripInfo currentUser={this.state.currentUser} trip={this.state.selectedTrip}/>
}

  render(){
    console.log(this.state.currentUser)
  return (
    <div className="App">
      <NavBar loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} handleClick={this.handleClick}/>
      <HomePage loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>
      <Switch>
        <Route path='/signup' render={this.renderSignup} />
        <Route path='/login' render={this.renderLogin} />
        <Route exact path='/home/:username' render={this.renderUserPage} />
        <Route path='/home/:username/trips/:trip_id' render={this.renderTripInfo}/>
      </Switch>
    </div>
  )
  }
}

export default App;
