import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'

class FlightCard extends Component {
    renderTickets = ()=>{
        // console.log(this.props.flight)
        const { arrivalAirportFsCode, departureAirportFsCode, departureTime } = this.props.flight
        const formatedDate = departureTime.replace(/[-T]/g, ' / ')
        return( 
            <div className="flight-card">
                <div className="tik-info">
                    <img src='./images/departure.png' alt='meh' className="landing" />
                    <h3>{departureAirportFsCode}</h3>
                        <div className="time">
                            Departure Time:
                            <h3>{formatedDate.split('').slice(0,22)}</h3>
                        </div>
                    <h3>{arrivalAirportFsCode}</h3>
                    <img src='./images/arrival.png' alt='meh' className="takingoff" />
                </div>
                <div>
                    <Link to={`/flights/${this.props.flight.flightNumber}`} >
                {/*onClick={()=>this.props.handleClick(this.props.flight)}> */}
                        <button className="button detail-button"
                                style={{height: '23px'}}
                                style={{'font-size': '22px'}}
                                style={{'fontWeight': '800'}}
                                onClick={()=>this.props.handleClick(this.props.flight)}
                                >
                            <span data-title="DETAILS"></span>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        // console.log("inside fight card", this.props.flight )
        return(
            <Switch>
                <Route path='/flights/:flightNumber'/>
                <Route exact path='/flights' render={this.renderTickets} />
            </Switch>
        )
    }
}

export default FlightCard;