import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class TripCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="trip-card">
                <p className="trip-name">TO: {this.props.trip.name}</p>
                <div>
                    {/* <Link to={`/home//${this.props.trip.flight_id}`} > */}
                        <button className="button detail-button"
                                style={{height: '23px'}}
                                style={{'font-size': '22px'}}
                                style={{'fontWeight': '800'}}
                                style={{margin: '0'}}
                                // onClick={()=>this.props.handleClick(this.props.flight)}
                                >
                            <span data-title="DETAILS"></span>
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        );
    }
}

export default TripCard;