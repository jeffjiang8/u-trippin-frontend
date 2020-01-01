import React, { Component } from 'react';

class UserInfo extends Component {

    state = {
        user: null
    }

    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/users/${localStorage.user_id}`)
        .then(resp=>resp.json())
        .then(user=>this.setState({
            user: user
        }))
    }

    render() {
        console.log(this.state.user)
        return (
            <div className="user-account">
                <h1>hi</h1>
            </div>
        );
    }
}

export default UserInfo;