import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class FlightCard extends Component {
    render() {
        const { arrivalAirportFsCode, departureAirportFsCode, departureTime } = this.props.flight
        const formatedDate = departureTime.replace(/[-T]/g, ' / ')
        return( 
            <div className="flight-card">
                <div className="tik-info">
                    <img src='http://localhost:3000/images/departure.png' alt='meh' className="landing" />
                    <h3>{departureAirportFsCode}</h3>
                        <div className="time">
                            Departure Time:
                            <h3>{formatedDate.split('').slice(0,22)}</h3>
                        </div>
                    <h3>{arrivalAirportFsCode}</h3>
                    <img src='http://localhost:3000/images/arrival.png' alt='meh' className="takingoff" />
                </div>
                <div>
                    <Link to={`/home/flights/${this.props.flight.flightNumber}`} >
                        <button className="button detail-button"
                                style={{height: '28px', fontSize: '22px', fontWeight: '800'}}
                                onClick={()=>this.props.handleClick(this.props.flight)}
                                >
                            <span data-title="GO!">Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FlightCard;