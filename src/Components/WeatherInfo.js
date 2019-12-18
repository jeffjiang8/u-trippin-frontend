import React, { Component } from 'react';

class WeatherInfo extends Component {

    state = {
        weather: '',
    }

    

    render() {
        console.log(this.state.weather)
        return (
            <div>
                {this.getWeather()}
            </div>
        );
    }
}

export default WeatherInfo;