import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

class TripCard extends Component {
    render() {
        if (this.props.currentUser === null) {
            return <Redirect to='/home'/>
        }
        return (
            <div className="trip-card">
                <div className="card-detail">
                    <p className="trip-name">TO: {this.props.trip.name}</p>
                    <span className="card-delete"
                        onClick={()=>this.props.handleTripDelete(this.props.trip)}>X</span>
                </div>
                <div>
                    <Link to={`/home/${this.props.currentUser.username}/trips/${this.props.trip.id}`} >
                        <button className="button detail-button"
                                style={{height: '28px', fontSize: '22px', fontWeight: '800', fontFamily: "'Roboto', sans-serif"}}
                                onClick={()=>this.props.handleClick(this.props.trip)}
                                >
                            <span data-title="GO!">Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default TripCard;