import React, {Component} from 'react';

class Login extends Component{

    state = {
        username: "",
        password: ""
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleSubmit = (e) => {
        e.preventDefault()
    
        fetch("http://localhost:3001/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(response => {
          //set user to state
          //redirect!
          if (response.errors){
            alert(response.errors)
          } else {
            this.props.setUser(response)
          }
        })
    
      }

    render(){
        return (
            <div className="Login">
                <form className="login-form">
                    <h2 className="page-title">LOGIN</h2>
                    <input  type="text" 
                            className="username"
                            placeholder="Username" 
                            name="username"
                            value={this.state.username}
                            style={{textAlign: "center"}}/>
                    <input  type="password" 
                            className="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            style={{textAlign: "center"}}/><br/><br/><br/>
                    <input  type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    
};

export default Login;