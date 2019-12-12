import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../redux/action'

class Signup extends Component {

    // createUser = (username, password)=>{
    //     console.log(username,password)
    //     fetch('http://localhost:3000/api/v1/users',{
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: username,
    //             password: password
    //         })
    //     })
    //     .then(resp=>resp.json())
    //     .then(console.log)
        
    // }

    // handleSubmit = (e)=>{
    //     e.persist()
    //     e.preventDefault()
    //     let userName = e.target[0].value
    //     let password 
    //     if (e.target[1].value === e.target[2].value){
    //         password = e.target[1].value
    //         this.createUser(userName, password)
    //         if (!this.createUser(userName, password)){
    //             window.alert("Username is taken, Please Try again")
    //             document.getElementsByClassName("login-form")[0].reset()
    //         } else {
    //             return <Redirect to='/show'/>
    //         }
    //     } else {
    //         window.alert("Please Try again")
    //         document.getElementsByClassName("login-form")[0].reset()
    //     }
    // }

    render(){
        return (
            <div className="Sign-up">
                <form className="signup-form" onSubmit={this.props.createUser}>
                {/* onSubmit={this.handleSubmit} */}
                    <h2 className="page-title">SIGN-UP</h2>
                    <input  type="text" 
                            className="username" 
                            placeholder="Username"
                            style={{textAlign: "center"}} />
                    <input  type="text" 
                            className="first-name" 
                            placeholder="First Name" 
                            style={{textAlign: "center"}} />
                    <input  type="text" 
                            className="last-name"
                            placeholder="Last Name"
                            style={{textAlign: "center"}} />
                    <input  type="text" 
                            className="age"
                            placeholder="Age"
                            style={{textAlign: "center"}} />
                    <input  type="text" 
                            className="email"
                            placeholder="Email"
                            style={{textAlign: "center"}} />
                    <input  type="text" 
                            className="phone-number"
                            placeholder="(xxx)-xxx-xxxx"
                            style={{textAlign: "center"}} />
                    <input  type='password' 
                            className="password"
                            placeholder="Password"
                            style={{textAlign: "center"}} />
                    <input  type='password' 
                            className="confirm-password"
                            placeholder="Confirm Password"
                            style={{textAlign: "center"}} /><br/><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

function msp(state){
    console.log(state.username)
    return {
      reduxUsername: state.username
    }
  }

export default  connect(msp, {createUser})(Signup);