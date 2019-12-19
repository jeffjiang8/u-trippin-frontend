import React, { Component } from 'react';

class UserContainer extends Component {

    state = {
        myTrips: [],
        loading: true
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/trips')
        .then(resp=>resp.json())
        .then(data=>this.setState({myTrips: data.filter(data=>data.user_id === localStorage.user_id), loading: false}))
    }
    render() {
        console.log(this.state.myTrips)

        if (this.state.loading){
            return <h1>loading...</h1>
        }
        return (
            <div>
               <h1>hi</h1>
            </div>
        );
    }
}

export default UserContainer;