import React, { Component } from 'react';
import BackgroundImg from './BackgroundImg'
class WeatherInfo extends Component {

    state = {
        weather: '',
        loading: true,
        img_url: ''
    }

    componentDidMount(){
        fetch(`https://api.weatherbit.io/v2.0/current?&lat=${this.props.state.arrivalLatitude}&lon=${this.props.state.arrivalLongitude}&key=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(resp=>resp.json())
        .then(data=>this.setState({weather: data.data[0], loading: false}))
    }
    
    render() {
        if (this.state.loading){
            return <h1>loading...</h1>
        }
        // console.log(this.state.weather)
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
            <div className="weather-info">
                <div className="background">
                    <BackgroundImg query={this.state.weather.city_name}/>
                </div>
                <div className="weather-details">
                    <ul className="detail-list">
                        <li>{city_name}, {state_code}, {country_code}</li>
                        <li><img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt='meh' className="weather-icon"/></li>
                        <li>{temp}°C</li>
                        <li>{weather.description}</li>
                        <li>Time Zone: {timezone.replace(/_/g, ' ')}</li>
                        <li>Pressure: {pres}</li>
                        <li>Clouds: {clouds}</li>
                        <li>Wind Speed: {wind_spd}mph</li>
                        <li>Wind Direction: {wind_cdir}</li>
                        <li>Sunrise: {sunrise}</li>
                        <li>Sunset: {sunset}</li>
                        <li>Snow: {snow}in</li>
                        <li>UV: {uv}</li>
                        <li>Precipitation: {precip}mm</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default WeatherInfo;