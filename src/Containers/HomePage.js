import React, {Component} from 'react';
import NavBar from './NavBar'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import FlightContainer from './FlightContainer'
import { Switch, Route, Link } from 'react-router-dom'
class HomePage extends Component {

    state={
        origin: '',
        destination: '',
        date: '',
        API_ID: process.env.REACT_APP_API_ID,
        API_KEY: process.env.REACT_APP_API_KEY
    }

    renderLogin = ()=>{
        return <Login />
    }

    renderSignup = ()=>{
        return <Signup />
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
        console.log(this.state)
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
                                placeholder="Departure (MM-DD-YYYY)"
                                style={{textAlign: "center"}} 
                                onChange={this.handleChange}/>
                        <Link to='/flights'>
                            <input type="submit" value="GO!" style={{width: "535px"}} className="submit-flight-info"/>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }

    renderFlights = ()=>{
        return (
        <FlightContainer state={this.state}/>
        )
    }   

    render() {
        return (
            <>
                <NavBar />
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