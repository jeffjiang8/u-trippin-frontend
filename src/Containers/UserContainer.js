import React, { Component } from 'react';
import TirpContainer from './TripContainer'
import TripInfo from './TripInfo'
import {Route, Switch} from 'react-router-dom'

class UserContainer extends Component {

    state = {
        myTrips: [],
        loading: true,
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/trips')
        .then(resp=>resp.json())
        .then(data=>this.setState({myTrips: data.filter(data=>data.user_id === localStorage.user_id).reverse(), loading: false}))
    }

    renderTripContainer = ()=>{
        return <TirpContainer trips={this.state.myTrips} handleClick={this.props.handleClick} currentUser={this.props.currentUser}/>
    }

    renderTripInfo = ()=>{
        return <TripInfo trip={this.props.selectedTrip}/>
    }

    render() {
        console.log(this.props)

        if (this.state.loading){
            return <h1>loading...</h1>
        }
        return (
            <div className="user-container">
               <Switch>
                   <Route path='/home/:username' render={this.renderTripContainer}/>
               </Switch>
            </div>
        );
    }
}

export default UserContainer;