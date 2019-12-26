import React, { Component } from 'react';
import TripList from './TripList'

class TripContainer extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="trip-container">
                <TripList trips={this.props.trips} handleClick={this.props.handleClick} currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default TripContainer;