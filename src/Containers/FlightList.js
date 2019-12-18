import React, { Component } from 'react';
import FlightCard from '../Components/FlightCard'
import {Redirect} from 'react-router-dom'

class FlightList extends Component {
    render() {
        // console.log(this.props.flights)
        if (this.props.flights === undefined){
            return <Redirect to='/home'/>
        }
        return (
            <div className="flight-list-container">
                {this.props.flights.map((flight,index)=> <FlightCard key={index} flight={flight} handleClick={this.props.handleClick}/>)}
            </div>
        );
    }
}

export default FlightList;