import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class UserInfo extends Component {

    state = {
        user: null,
        clicked: false,
        confirmation: false,
        newUsername: '',
        newFirstName: '',
        newLastName: '',
        newAge: '',
        newEmail: '',
        newPhoneNumber: '',
        loading: true,
        deleted: false,
    }

    componentDidMount(){
        fetch(`http://localhost:4000/api/v1/users/${localStorage.user_id}`)
        .then(resp=>resp.json())
        .then(user=>this.setState({
            user: user,
            newUsername: user.username,
            newFirstName: user.first_name,
            newLastName: user.last_name,
            newAge: user.age,
            newEmail: user.email,
            newPhoneNumber: user.phone_number,
            loading: false
        }))
    }

    handleDoubleClick = ()=>{
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`http://localhost:4000/api/v1/users/${localStorage.user_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.newUsername,
                first_name: this.state.newFirstName,
                last_name: this.state.newLastName,
                age: this.state.newAge,
                email: this.state.newEmail,
                phone_number: this.state.newPhoneNumber
            })
        })
        .then(resp=>resp.json())
        .then(()=>this.setState({loading: true}))
        .then(()=>{ fetch(`http://localhost:4000/api/v1/users/${localStorage.user_id}`)
                .then(resp=>resp.json())
                .then(user=>this.setState({
                    user: user,
                    newUsername: user.username,
                    newFirstName: user.first_name,
                    newLastName: user.last_name,
                    newAge: user.age,
                    newEmail: user.email,
                    newPhoneNumber: user.phone_number,
                    loading: false,
                    clicked: false 
        }))})
        
    }

    handleBtnClick = ()=>{
        this.setState({confirmation: !this.state.confirmation})
    }

    handleDeleteAccount = ()=>{
        fetch(`http://localhost:4000/api/v1/users/${localStorage.user_id}`,{
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            }
        })
        .then(resp=>resp.json())
        .then(()=>{this.props.handleDelete()})
    }

    render() {
        if (this.state.loading){
           return <p>loading</p>
        }
        if (this.state.deleted){
            return <Redirect to="/home" />
        }
        return (
            <div className="user-account" onDoubleClick={this.handleDoubleClick}>
                <h1>Account Information</h1>
                {   this.state.user === null
                    ?
                    ""
                    :
                        this.state.clicked 
                        ?
                        <>
                            <form className="user-info-edit" onSubmit={this.handleSubmit}>
                                <h2>Username:<input 
                                                name="newUsername" 
                                                defaultValue={this.state.newUsername} 
                                                onChange={this.handleChange}
                                                className="user-input"/></h2>
                                <h2>First Name:<input 
                                                name="newFirstName" 
                                                defaultValue={this.state.newFirstName} 
                                                onChange={this.handleChange}
                                                className="user-input"/></h2>
                                <h2>Last Name:<input 
                                                name="newLastName" 
                                                defaultValue={this.state.newLastName} 
                                                onChange={this.handleChange}
                                                className="user-input"/></h2>
                                <h2>Age:<input 
                                                name="newAge" 
                                                defaultValue={this.state.newAge} 
                                                onChange={this.handleChange}
                                                className="user-input"/></h2>
                                <h2>Email:<input 
                                                name="newEmail" 
                                                defaultValue={this.state.newEmail} 
                                                onChange={this.handleChange}
                                                className="user-input"/></h2>
                                <h2>Phone Number:<input 
                                                name="newPhoneNumber" 
                                                defaultValue={this.state.newPhoneNumber} 
                                                onChange={this.handleChange}
                                                className="user-input"/></h2>
                                <input type="submit" value="Save" />
                            </form>
                            <h4 onClick={this.handleDoubleClick}>Cancel</h4>
                        </>
                        :
                        <>
                            <h2>Username: {this.state.user.username}</h2>
                            <h2>First Name: {this.state.user.first_name}</h2>
                            <h2>Last Name: {this.state.user.last_name}</h2>
                            <h2>Age: {this.state.user.age}</h2>
                            <h2>Email: {this.state.user.email}</h2>
                            <h2>Phone Number: {this.state.user.phone_number}</h2>
                            <div className="user-account-action">
                                <button onClick={this.handleBtnClick}>Delete Account</button>
                            </div>
                        </>
                }
                {
                    this.state.confirmation
                    ?
                    <div className="confirm-delete">
                        <p>Are you Sure?</p>
                        <div className="delete-btns">
                            <button onClick={this.handleDeleteAccount}>Confirm</button>
                            <button onClick={this.handleBtnClick}>Cancel</button>
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        );
    }
}

export default UserInfo;