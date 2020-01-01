import React, { Component } from 'react';
// import InlineEdit from 'react-edit-inline';

class UserInfo extends Component {

    state = {
        user: null,
        username: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phoneNumber: '',
    }

    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/users/${localStorage.user_id}`)
        .then(resp=>resp.json())
        .then(user=>this.setState({
            user: user
        }))
    }

    handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="user-account">
                {   this.state.user === null
                    ?
                    ""
                    :
                    <>
                        <h2>Usename: {this.state.user.username}</h2>
                        <h2>First Name: {this.state.user.first_name}</h2>
                        <h2>Last Name: {this.state.user.last_name}</h2>
                        <h2>Age: {this.state.user.age}</h2>
                        <h2>Email: {this.state.user.email}</h2>
                        <h2>Phone Number: {this.state.user.phone_number}</h2>
                        <div className="user-account-action">
                            <button>Save</button>
                            <button>Delete Account</button>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default UserInfo;