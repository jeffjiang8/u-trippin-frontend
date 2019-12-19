import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NavBar extends Component {
    
    render() {
        return (
            <header>
                <div className = 'navbar'>
                        <a href='http://localhost:3000/home'>
                            <img src='http://localhost:3000/images/image.png' className="logo" alt='meh'/>
                        </a>
                        {this.props.loggedIn
                        ?
                        <div className="user-action">
                            <Link to={`/home/${this.props.currentUser.username}`}>Hello, {this.props.currentUser.username}</Link>&nbsp;
                            |
                            &nbsp;<Link to='/home'><p className="logout" onClick={this.props.handleClick}>LogOut</p></Link>
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