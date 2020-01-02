import React, { Component } from 'react';
import WeatherInfo from './WeatherInfo'
import {Route, Link, Redirect} from 'react-router-dom'

class FlightInfo extends Component {

    state = {
        arrivalLatitude: null,
        arrivalLongitude: null,
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

    book = ()=>{
        const parsedYear = this.props.flight.departureTime.slice(0,4)
        const parsedMonth = this.props.flight.departureTime.slice(5,7)
        const parsedDay = this.props.flight.departureTime.slice(8,10)
        const parsedTime = this.props.flight.departureTime.slice(11,16)
        if (localStorage.user_id === null) {
            return window.alert("Please Sign Up / Login!")
        }else{
            fetch('http://localhost:4000/api/v1/trips', {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    "accpets": "application/json",
                    "Authorization": localStorage.user_id
                },
                body: JSON.stringify({
                    name: this.props.flight.arrivalAirportFsCode,
                    from: this.props.flight.departureAirportFsCode,
                    terminal: this.props.flight.departureTerminal,
                    carrier: this.props.flight.carrierFsCode,
                    year: parsedYear,
                    month: parsedMonth,
                    day: parsedDay,
                    time: parsedTime,
                    flight_id: this.props.flight.flightNumber,
                })
            })
            .then(resp=>resp.json())
            .then(this.setState({clicked: true}))
        }
    }

    render() {
        console.log(this.props.flight.departureTime)
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
                                
                                    // <button onClick={this.book}>Book</button>
                                    <img src='http://localhost:3000/images/white-book.png' alt="meh" className="book-button" onClick={this.book}/>
                                :
                                ''
                            }
                            
                        </div>
                    </div>
                        <Link to='/home/flights'>
                            <img src='http://localhost:3000/images/back.png' alt="meh" className="back-btn" />
                        </Link>
                </>
                :
                <h1>Loading...</h1>
                }
                {
                    this.state.clicked?
                    <div className="select-path">
                        <p>Success...</p>
                        <div className="path-btns">
                            <Link to={`/home/${this.props.currentUser.username}`}>
                                <button>DashBoard</button>
                            </Link>
                            <Link to='/home' >
                                <button>Book Another Flight</button>
                            </Link>
                        </div>
                    </div>
                    :
                    ""
                }
                
            </>
        )
    }
}

export default FlightInfo;