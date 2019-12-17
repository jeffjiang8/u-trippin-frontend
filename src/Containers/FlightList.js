import React, { Component } from 'react';
import FlightCard from '../Components/FlightCard'

class FlightList extends Component {
    render() {
        // console.log(this.props.flights)
        return (
            <div className="flight-list-container">
                {this.props.flights.map((flight,index)=> <FlightCard key={index} flight={flight} handleClick={this.props.handleClick}/>)}
            </div>
        );
    }
}

export default FlightList;