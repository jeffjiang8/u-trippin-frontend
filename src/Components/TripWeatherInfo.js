import React, { Component } from 'react';
import BackgroundImg from './BackgroundImg'
import TripWeatherBackground from './TripWeatherBackground'

class TripWeatherInfo extends Component {

    state = {
        weather: '',
        loading: true,
    }

    componentDidMount(){
        // if (this.props.airport !== null){
        fetch(`https://api.weatherbit.io/v2.0/current?&city=${this.props.airport.city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(resp=>resp.json())
        .then(data=> this.setState({weather: data.data[0], loading: false}))
    }
    
    render() {
        console.log(this.state.weather)
            if (this.state.loading){
                return <h1>loading...</h1>
            }
            const { pres, 
                    timezone, 
                    clouds, 
                    country_code, 
                    state_code, 
                    city_name, 
                    wind_spd,
                    wind_cdir,
                    sunset,
                    snow,
                    uv,
                    precip,
                    sunrise,
                    weather,
                    temp} = this.state.weather
    
            return (
                <>
                    <div className="trip-weather-background">
                        <TripWeatherBackground query={this.state.weather.city_name}/>
                    </div>
                    <div className="trip-weather-details">
                        <ul className="weather-detail-list">
                            <li className="weather-detail-list">{city_name}, {state_code}, {country_code}</li>
                            <li className="weather-detail-list"><img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt='meh' className="weather-icon"/></li>
                            <li className="weather-detail-list">{temp}°C</li>
                            <li className="weather-detail-list">{weather.description}</li>
                            <li className="weather-detail-list">Time Zone: {timezone.replace(/_/g, ' ')}</li>
                            <li className="weather-detail-list">Pressure: {pres}</li>
                            <li className="weather-detail-list">Clouds: {clouds}</li>
                            <li className="weather-detail-list">Wind Speed: {wind_spd}mph</li>
                            <li className="weather-detail-list">Wind Direction: {wind_cdir}</li>
                            <li className="weather-detail-list">Sunrise: {sunrise}</li>
                            <li className="weather-detail-list">Sunset: {sunset}</li>
                            <li className="weather-detail-list">Snow: {snow}in</li>
                            <li className="weather-detail-list">UV: {uv}</li>
                            <li className="weather-detail-list">Precipitation: {precip}mm</li>
                        </ul>
                    </div>
                </>
        );
    }
}

export default TripWeatherInfo;