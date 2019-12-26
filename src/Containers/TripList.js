import React, { Component } from 'react';
import TripCard from '../Components/TripCard'

class TripList extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="trip-list-container">
                {
                    this.props.trips.map(trip => <TripCard key={trip.id} trip={trip}  handleClick={this.props.handleClick} currentUser={this.props.currentUser}/>)
                }
            </div>
        );
    }
}

export default TripList;