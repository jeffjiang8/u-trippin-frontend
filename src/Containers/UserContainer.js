import React, { Component } from 'react';
import TirpContainer from './TripContainer'

class UserContainer extends Component {

    state = {
        myTrips: [],
        loading: true,
        selectedTrip: null
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/trips')
        .then(resp=>resp.json())
        .then(data=>this.setState({myTrips: data.filter(data=>data.user_id === localStorage.user_id), loading: false}))
    }

    handleClick = (trip)=>{
        this.setState({
            selectedTrip: trip
        })
    }

    render() {
        console.log(this.props)

        if (this.state.loading){
            return <h1>loading...</h1>
        }
        return (
            <div className="user-container">
               <TirpContainer trips={this.state.myTrips} handleClick={this.handleClick} currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default UserContainer;