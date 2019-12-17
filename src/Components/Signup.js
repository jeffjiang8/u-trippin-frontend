import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Signup extends Component {

        state = {
                username: "",
                firstName: "",
                lastName: "",
                age: "",
                email: "",
                phoneNumber: "",
                password: "",
                passwordConfirmation: "",
        }

        handleChange = (event) => {
        this.setState({
                [event.target.name]: event.target.value
        })
        }

        handleSubmit = (e) => {
                e.preventDefault()
            
                if (this.state.password === this.state.passwordConfirmation){
                  fetch("http://localhost:4000/api/v1/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        username: this.state.username, 
                        first_name: this.state.firstName,
                        last_name: this.state.lastName,
                        age: this.state.age,
                        email: this.state.email,
                        phone_number: this.state.phoneNumber,
                        password: this.state.password
                        })
                  })
                  .then(res => res.json())
                  .then(response => {
                    if(response.errors){
                      alert(response.errors)
                    } else {
                      // send them somewhere
                      // storing the user object SOMEWHERE
                      this.props.setUser(response)
                    }
                  })
                } else {
                  alert("Password Has To Match! Please Try Again!")
                }
            
              }

        render(){
                return (
                <div className="Sign-up">
                        <form className="signup-form" onSubmit={this.props.createUser}>
                        <h2 className="page-title">SIGN-UP</h2>
                        <input  type="text" 
                                className="username" 
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                style={{textAlign: "center"}} 
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="first-name" 
                                placeholder="First Name" 
                                name="firstName"
                                value={this.state.firstName}
                                style={{textAlign: "center"}}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="last-name"
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                style={{textAlign: "center"}}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="age"
                                placeholder="Age"
                                name="age"
                                value={this.state.age}
                                style={{textAlign: "center"}}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                style={{textAlign: "center"}}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                className="phone-number"
                                placeholder="(xxx)-xxx-xxxx"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                style={{textAlign: "center"}}
                                onChange={this.handleChange}/>
                        <input  type='password' 
                                className="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                style={{textAlign: "center"}}
                                onChange={this.handleChange}/>
                        <input  type='password' 
                                className="confirm-password"
                                placeholder="Confirm Password"
                                name="passwordConfirmation"
                                value={this.state.passwordConfirmation}
                                style={{textAlign: "center"}} 
                                onChange={this.handleChange}/><br/><br/><br/>
                        <input type="submit" value="Submit" />
                        </form>
                </div>
                )
        }
}

export default  Signup;