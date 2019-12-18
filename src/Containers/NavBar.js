import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
class NavBar extends Component {
    
    render() {
        return (
            <header>
                <div className = 'navbar'>
                        <a href='http://localhost:3000/home'>
                            <img src='./images/image.png' className="logo" alt='meh'/>
                        </a>
                        {this.props.loggedIn
                        ?
                        <div className="user-action">
                            <Link to={`/${this.props.currentUser.username}`}>Hello, {this.props.currentUser.username}</Link>&nbsp;
                            |
                            &nbsp;<a href='http://localhost:3000/home' onClick={this.props.handleClick}>LogOut</a>
                        </div>
                        :
                        <div className="user-action">
                            <a href="http://localhost:3000/login?">Login</a>&nbsp;
                            |
                            &nbsp;<a href='http://localhost:3000/signup?'>Sign-Up</a>
                        </div>
                        }
                        
                </div>
            </header>
        );
    }
}

export default NavBar;