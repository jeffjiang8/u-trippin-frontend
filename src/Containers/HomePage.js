import React, {Component} from 'react';
import uuid from 'react-uuid'
import NavBar from './NavBar'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import FlightContainer from './FlightContainer'
import Airports from '../Components/Airports'
import { Switch, Route, Link } from 'react-router-dom'
class HomePage extends Component {

    state={
        origin: '',
        destination: '',
        date: '',
        API_ID: process.env.REACT_APP_API_ID,
        API_KEY: process.env.REACT_APP_API_KEY,
        API_KEY_2: process.env.REACT_APP_CITY_API_KEY,
        currentUser: null,
        cityName: ''
    }

    setUser = (user)=>{
        this.setState({
            currentUser: user
        })
    }

    renderLogin = ()=>{
        return <Login setUser={this.setUser}/>
    }

    renderSignup = ()=>{
        return <Signup setUser={this.setUser} />
    }

    handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
    }

    handleSearch = (cityName)=>{
        fetch(`http://aviation-edge.com/v2/public/autocomplete?key=${this.state.API_KEY_2}&city=${cityName}`)
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    }

    renderHomePage = ()=>{
        return (
            <div className="home-page">
                <div className="home-page-logo">
                    <img src='./images/image.png' alt="meh" />
                    <p className="slogan">Clean. Compact. Convenient.</p>
                </div><br/><br/>
                <div className="search-form">
                    <form className="flight-form">
                        <input  type="text" 
                                className="origin" 
                                name="origin"
                                placeholder="Origin"
                                style={{textAlign: "center"}} 
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="destination" 
                                name='destination'
                                placeholder="Destination" 
                                style={{textAlign: "center"}} 
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="departure-date"
                                name="date"
                                placeholder="Departure (YYYY/MM/DD)"
                                style={{textAlign: "center"}} 
                                onChange={this.handleChange}/><br/>
                        <Link to='/flights'>
                            <input type="submit" value="GO!" style={{width: "535px"}} className="submit-flight-info"/>
                        </Link>
                    </form>
                </div><br/><br/>
                <div>
                    <input  type="text" 
                                className="city"
                                name="cityName"
                                placeholder="Look For Your Airport"
                                onChange={this.handleChange}
                                style={{textAlign: "center"}} />
                </div>
                <div>
                    <button className="button" style={{'fontWeight': '800'}} onClick={()=>{this.handleSearch(this.state.cityName)}}>
                        <span data-title="SEARCH">READY?</span>
                    </button>
                </div>
            </div>
        )
    }

    renderAiports = ()=>{
        return (
            <Airports key={uuid()} city={this.state.cityName} apiKey={this.state.API_KEY_2} />
        )
    } 

    renderFlights = ()=>{
        return (
            <FlightContainer key={uuid()} state={this.state}/>
        )
    }   

    

    render() {
        // console.log(this.state.API_KEY_2)
        return (
            <>
                <NavBar loggedIn={this.state.loggedIn}/>
                <Switch>
                    <Route exact path='/home' render={this.renderHomePage} />
                    <Route path='/signup' render={this.renderSignup} />
                    <Route path='/login' render={this.renderLogin} />
                    <Route path='/flights' render={this.renderFlights} />
                </Switch>
            </>
        );
    }
};

export default HomePage;