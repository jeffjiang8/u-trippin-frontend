import React, { Component } from 'react';
import FlightList from './FlightList'
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'

class FlightContainer extends Component {

    state = {
        flights: [],
        loading: true,
        updated:false
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/get_flights', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                origin: this.props.state.origin,
                destination: this.props.state.destination,
                date: this.props.state.date
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({
            flights: data.scheduledFlights,
            loading: false
        })) 
    }

    

    renderFlightList = ()=>{
        return (
            <div className='flights-container'>
                <FlightList flights={this.state.flights} handleClick={this.props.handleClick}/>
            </div>
        )
    }

    

    render() {
        // console.log(this.state.flights)
        // console.log("inside render", this.state)
        if(this.state.loading){
            return <h1>loading...</h1>
        }
        // if(this.state.updated){
        //     console.log(this.state.selectedFlight)
        //     return <FlightInfo key={this.state.selectedFlight.flightNumber} flight={this.state.selectedFlight}/>
        // }
        return (
            <div className='flights-container'>
                <FlightList flights={this.state.flights} handleClick={this.props.handleClick}/>
            </div>
        );
    }
}

export default FlightContainer;