import React, { Component } from 'react';
import TripCard from '../Components/TripCard'

class TripList extends Component {
    render() {
        console.log(this.props.trips)
        return (
            <div className="trip-list-container">
                {
                    this.props.trips.map(trip => <TripCard key={trip.id} trip={trip}  handleClick={this.props.handleClick}/>)
                }
            </div>
        );
    }
}

export default TripList;