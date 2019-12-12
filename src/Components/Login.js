import React, {Component} from 'react';

class Login extends Component{

    // stata ={
    //     username: ''
    // }

    // fetchUser = (username)=>{
    //     fetch(`http://localhost:3000/api/v1/users/${username}`)
    //     .then(resp=>resp.json())
    //     .then(console.log)
    //     // if data !==null{
    //     // setstate currentuser
    // }

    // handleChange = (e)=>{
    //     e.persist()
    //     console.log(e)
    // }

    // handleSubmit = (e)=>{
    //     e.persist()
    // }

    render(){
        return (
            <div className="Login">
                <h2 className="page-title">LOGIN</h2>
                <form className="login-form">
                        Username
                    <input type="text" className="username" onChange={this.handleChange}/>
                        Password
                    <input type="text" className="password"/><br/>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
    
};

export default Login;