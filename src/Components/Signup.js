import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

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
            <div className="Login">
                <h2 className="page-title">SIGN-UP</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                        Username
                    <input type="text" className="username"/>
                        Password
                    <input type='password' className="password"/>
                        Confirm Password
                    <input type='password' className="confirm-password"/>
                    <br/>
                    <button type="submit">
                        Sign-up
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup;