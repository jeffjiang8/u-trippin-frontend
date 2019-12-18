import React, { Component } from 'react';
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

    handleClick = ()=>{
        fetch(`https://api.weatherbit.io/v2.0/current?&lat=${this.state.arrivalLatitude}&lon=${this.state.arrivalLongitude}&key=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(resp=>resp.json())
        .then(data=>this.setState({weather: data.data[0], clicked: true}))
    }

    render() {
        
        console.log(this.state.weather)
        
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

        if (this.props.flight === undefined && departureTime === undefined && arrivalTime === undefined){
            return <Redirect to='/home' />
        }
        
        return (
            <>
                <div className="flight-info">
                    <div className="info-body">
                        <div className="info">
                            <p>From: {departureAirportFsCode}</p>
                            <p>Terminal: {departureTerminal}</p>
                            <p>Departing: {departing.split('').slice(0,22)}</p><br/><br/>
                            <p>Carrier: {carrierFsCode}</p>
                            <p>Flight Number: {flightNumber}</p>
                            <p>Stops: {stops}</p><br/><br/>
                            <p>To: {arrivalAirportFsCode}</p>
                            <p>Terminal: {arrivalTerminal}</p>
                            <p>Arriving: {arriving.split('').slice(0,22)}</p>
                        </div>
                        <div className="weather-info">
                            {this.state.clicked
                            ?
                            <h1>hi</h1>
                            :
                            <button onClick={this.handleClick}>Check Weather</button>
                            }
                        </div>
                    </div>
                    <div className="book-btn">
                        <button>Book</button>
                    </div>
                </div>
                    <Link to='/flights'>
                        <button>Back</button>
                    </Link>
            </>
        )
    }
}

export default FlightInfo;