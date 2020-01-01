import React, { Component } from 'react';
import TirpContainer from './TripContainer'
import TripInfo from './TripInfo'
import {Route, Switch, Link, Redirect} from 'react-router-dom'

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

    handleTripDelete = (trip)=>{
        fetch(`http://localhost:4000/api/v1/trips/${trip.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            }
        })
        .then(resp=>resp.json())
        .then( ()=> fetch('http://localhost:4000/api/v1/trips')
                    .then(resp=>resp.json())
                    .then(data=>this.setState({myTrips: data.filter(data=>data.user_id === localStorage.user_id).reverse(), loading: false})))
        
    }

    renderTripContainer = ()=>{
        return (
            <TirpContainer trips={this.state.myTrips} handleClick={this.props.handleClick} currentUser={this.props.currentUser} handleTripDelete={this.handleTripDelete}/>
        )
    }

    renderTripInfo = ()=>{
        return <TripInfo trip={this.props.selectedTrip}/>
    }

    render() {
        console.log(this.props)

        if (this.state.loading){
            return <h1>loading...</h1>
        }

        if (this.props.currentUser === null){
            return <Redirect to='/home'/>
        }
        return (
            <div className="user-container">
                <div className="account-action">
                    <h2 className="greeting">Hello, {this.props.currentUser.username}</h2>
                    <Link to={`/home/${this.props.currentUser.username}/account`}>
                        <button>Account Information</button>
                    </Link>
                </div>
               <Switch>
                   <Route path='/home/:username' render={this.renderTripContainer}/>
               </Switch>
            </div>
        );
    }
}

export default UserContainer;