import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

class TripCard extends Component {
    render() {
        if (this.props.currentUser === null) {
            return <Redirect to='/home'/>
        }
        return (
            <div className="trip-card">
                <p className="trip-name">TO: {this.props.trip.name}</p>
                <div>
                    <Link to={`/home/${this.props.currentUser.username}/trips/${this.props.trip.id}`} >
                        <button className="button detail-button"
                                style={{height: '23px'}}
                                style={{'font-size': '22px'}}
                                style={{'fontWeight': '800'}}
                                style={{margin: '0'}}
                                onClick={()=>this.props.handleClick(this.props.trip)}
                                >
                            <span data-title="DETAILS"></span>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default TripCard;