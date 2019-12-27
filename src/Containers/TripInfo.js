import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import TripWeatherInfo from '../Components/TripWeatherInfo';
import PackListContainer from './PackListContainer'


class TripInfo extends Component {

    state = {
        airport: null,
        clicked: false
    }

    componentDidMount(){
        if (this.props.trip === null) {
            return <Redirect to='/home' />
        }
        fetch('http://localhost:4000/api/v1/get_location', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                iata: this.props.trip.name
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({airport: data.airports[0]}))
    }

    render() {
        
        console.log(this.props)
        if (this.props.trip === null) {
            return <Redirect to='/home/' />
        }

        const { from, 
                name,
                year,
                month,
                day,
                time,
                carrier,
                flight_id} = this.props.trip
        
        return (
            <>
                <h2 className="greeting">Hello, {this.props.currentUser.username}</h2>
                <div className="trip-detail">
                    <div className="trip-flight-detail">
                        <div className="section-div">
                            <p className="detail-title">Flight Detail</p>
                            <div className="top-divider"></div>
                        </div>
                        <div className="detail-container">
                            <div className="trip-flight-detail-info">
                                <ul className="trip-flight-detail-list">
                                    <li>From: {from}</li>
                                    <li>To: {name}/  
                                    {   this.state.airport !== null
                                        ?
                                        this.state.airport.name
                                        :
                                        ""}
                                    </li>
                                    <li>Departing: {year}/{month}/{day}/{time}</li>
                                    <li>Flight: {carrier} {flight_id}</li>
                                </ul>
                            </div>
                            <div className="trip-weather-info">
                                {   this.state.airport !== null
                                    ?
                                    <TripWeatherInfo airport={this.state.airport} />
                                    :
                                    ""}
                            </div>
                        </div>
                    </div>
                    <div className="pack-list-container">
                        <div className="section-div">
                            <p className="detail-title">Pack List</p>
                            <div className="bottom-divider"></div>
                            { <PackListContainer trip={this.props.trip}/>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TripInfo;