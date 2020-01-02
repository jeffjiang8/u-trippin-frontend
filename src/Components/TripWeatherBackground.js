import React, { Component } from 'react';

class TripWeatherBackground extends Component {

    state={
        url: '',
        loading: true
    }

    componentDidMount(){
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_IMG_API_KEY}&q=${this.props.query}&category=travel&image_type=photo&pretty=true`)
        .then(resp=>resp.json())
        .then(data=> {if(data.hits[0] !== undefined){
                return this.setState({url: data.hits[0].largeImageURL, loading: false})
                } else {
                    return this.setState({url: undefined, loading: false})
                }})
    }

    render() {
        return (
                <>  
                {
                    this.state.url === undefined
                    ?
                    <img src='http://localhost:3000/images/alt.jpeg' alt='meh' className="trip-background-img"/>
                    :
                    <img src={`${this.state.url}`} alt='../public/images/alt.jpeg' className="trip-background-img"/>
                }
                </>
        );
    }
}

export default TripWeatherBackground;