import React, {Component} from 'react';
import uuid from 'react-uuid'
import NavBar from './NavBar'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import FlightInfo from '../Components/FlightInfo'
import FlightContainer from './FlightContainer'
import { Switch, Route, Link } from 'react-router-dom'
class HomePage extends Component {

    state={
        origin: '',
        destination: '',
        date: '',
        currentUser: null,
        cityName: '',
        selectedFlight: {},
        airports: null,
        searched: false
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

    renderHomePage = ()=>{
        return (
            <div className="home-page">
                <div className="home-page-logo">
                    <div className="banner">
                        <p className="app-name">UTrippin</p>
                        <img src='./images/image.png' alt="meh" />
                    </div>
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
                                value={this.state.cityName}
                                onChange={this.handleChange}
                                style={{textAlign: "center"}} />
                </div>
                <div>
                    <button className="button" style={{'fontWeight': '800'}} onClick={this.handleSearch}>
                        <span data-title="SEARCH">READY?</span>
                    </button>
                </div>
                <div className="airport-result">
                    
                        {this.state.searched
                        ?
                            this.state.airports === undefined
                            ?
                            "Please Try Again!"
                            :
                            this.state.airports.map(airport=><p>{airport.codeIataAirport} | {airport.nameAirport}</p>)
                        :
                        ""
                        }
                    
                </div>
            </div>
        )
    }

    handleSearch = ()=>{
        fetch('http://localhost:4000/api/v1/get_airports', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                city_name: this.state.cityName
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({airports: data.airportsByCities, searched: true})) 
    }

    handleClick = (flight)=>{
        this.setState({
            selectedFlight: flight
        })
    }

    renderFlights = ()=>{
        return (
            <FlightContainer key={uuid()} state={this.state} handleClick={this.handleClick}/>
        )
    }   


    renderInfo = (routerProps)=>{
        return <FlightInfo key={this.state.selectedFlight.flightNumber} {...routerProps} flight={this.state.selectedFlight}/>
    }

    

    render() {
        // console.log(this.state.airports)
        return (
            <>
                <NavBar loggedIn={this.state.loggedIn}/>
                <Switch>
                    <Route exact path='/home' render={this.renderHomePage} />
                    <Route path='/signup' render={this.renderSignup} />
                    <Route path='/login' render={this.renderLogin} />
                    <Route path='/flights/:flightNumber' render={this.renderInfo} />
                    <Route path='/flights' render={this.renderFlights} />
                </Switch>
            </>
        );
    }
};

export default HomePage;