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
                <form className="login-form">
                    <h2 className="page-title">LOGIN</h2>
                    <input  type="text" 
                            className="username"
                            placeholder="Username" 
                            style={{textAlign: "center"}}/>
                    {/* onChange={this.handleChange} */}
                    <input  type="password" 
                            className="password"
                            placeholder="Password"
                            style={{textAlign: "center"}}/><br/><br/><br/>
                    <input  type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    
};

export default Login;