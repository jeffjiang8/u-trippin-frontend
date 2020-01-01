import React, { Component } from 'react';
import TripList from './TripList'

class TripContainer extends Component {
    render() {
        return (
            <div className="trip-container">
                <TripList trips={this.props.trips} handleClick={this.props.handleClick} currentUser={this.props.currentUser} handleTripDelete={this.props.handleTripDelete}/>
            </div>
        );
    }
}

export default TripContainer;