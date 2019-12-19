import React, { Component } from 'react';
import WeatherInfo from './WeatherInfo'
import {Route, Link, Redirect} from 'react-router-dom'

class FlightInfo extends Component {

    state = {
        arrivalLatitude: null,
        arrivalLongitude: null,
        weather: '',
        clicked: false
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/get_location', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                iata: this.props.flight.arrivalAirportFsCode
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({arrivalLatitude: data.airports[0].latitude, arrivalLongitude: data.airports[0].longitude}))
    }

    // handleClick = ()=>{
    //     fetch(`https://api.weatherbit.io/v2.0/current?&lat=${this.state.arrivalLatitude}&lon=${this.state.arrivalLongitude}&key=${process.env.REACT_APP_WEATHER_API_KEY}`)
    //     .then(resp=>resp.json())
    //     .then(data=>this.setState({weather: data.data[0], clicked: true}))
    // }

    book = ()=>{
        if (localStorage.user_id === null) {
            return window.alert("Please Sign Up / Login!")
        }else{
            fetch('http://localhost:4000/api/v1/trips', {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    "accpets": "application/json"
                },
                body: JSON.stringify({
                    name: this.props.flight.arrivalAirportFsCode,
                    flight_id: this.props.flight.flightNumber,
                    user_id: localStorage.user_id
                })
            })
            .then(resp=>resp.json())
            .then(console.log)
        }
    }

    render() {
        if (this.props.flight === undefined && departureTime === undefined && arrivalTime === undefined){
            return <Redirect to='/home' />
        }

        const { carrierFsCode, 
                flightNumber, 
                departureAirportFsCode, 
                arrivalAirportFsCode, 
                stops, 
                departureTerminal, 
                arrivalTerminal, 
                departureTime, 
                arrivalTime} = this.props.flight

        const departing = departureTime.replace(/[-T]/g, ' / ')
        const arriving = arrivalTime.replace(/[-T]/g, ' / ')
        
        return (
            <>
                {this.state.arrivalLatitude !== null ?
                <>
                    <div className="flight-info">
                        <div className="info-body">
                            <div className="info">
                                <p className="info-detail">From: {departureAirportFsCode}</p>
                                <p className="info-detail">Terminal: {departureTerminal}</p>
                                <p className="info-detail">Departing: {departing.split('').slice(0,22)}</p><br/><br/>
                                <p className="info-detail">Carrier: {carrierFsCode}</p>
                                <p className="info-detail">Flight Number: {flightNumber}</p>
                                <p className="info-detail">Stops: {stops}</p><br/><br/>
                                <p className="info-detail">To: {arrivalAirportFsCode}</p>
                                <p className="info-detail">Terminal: {arrivalTerminal}</p>
                                <p className="info-detail">Arriving: {arriving.split('').slice(0,22)}</p>
                            </div>
                            
                                {<WeatherInfo state={this.state} />}
                            
                        </div>
                        <div className="book-btn">
                            {
                                this.props.loggedIn
                                ?
                                <Link to={`/home/${this.props.currentUser.username}`}>
                                    <button onClick={this.book}>Book</button>
                                </Link>
                                :
                                ''
                            }
                            
                        </div>
                    </div>
                        <Link to='/home/flights'>
                            <button>Back</button>
                        </Link>
                </>
                :
                <h1>Loading...</h1>
                
                }
            </>
        )
    }
}

export default FlightInfo;