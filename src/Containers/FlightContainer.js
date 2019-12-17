import React, { Component } from 'react';
import FlightList from './FlightList'
import FlightInfo from '../Components/FlightInfo'
import {Route, Switch} from 'react-router-dom'

class FlightContainer extends Component {

    state = {
        flights: [],
        selectedFlight: {},
        loading: true
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

    handleClick = (flight)=>{
        console.log(flight)
        this.setState({
            selectedFlight: flight
        })
    }

    renderFlightList = ()=>{
        return (
            <div className='flights-container'>
                <FlightList flights={this.state.flights} handleClick={this.handleClick}/>
            </div>
        )
    }


    renderInfo = ()=>{
        return <FlightInfo key={this.state.selectedFlight.flightNumber} flight={this.state.selectedFlight}/>
    }

    // 

    render() {
        console.log(this.state.selectedFlight)
        if(this.state.loading){
            return <h1>loading...</h1>
        }

        return (
            <Switch>
                <Route path='/flights/:flightNumber' render={this.renderInfo} />
                <Route path="/flights" render={this.renderFlightList}/>
            </Switch>
        );
    }
}

export default FlightContainer;