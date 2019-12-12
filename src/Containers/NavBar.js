import React, { Component } from 'react';

class NavBar extends Component {
    state = {
        login: false
    }

    render() {
        return (
            <div className = 'navbar'>
                    <a href='http://localhost:3001/home'>
                        <img src='./images/image.png' className="logo" alt='meh'/>
                    </a>
                    {this.state.login
                    ?
                    <div className="user-action">
                        <a href={'http://localhost:3001/${username}'}>username</a>&nbsp;
                        |
                        &nbsp;<a href='http://localhost:3001/'>LogOut</a>
                    </div>
                    :
                    <div className="user-action">
                        <a href="http://localhost:3001/login?">Login</a>&nbsp;
                        |
                        &nbsp;<a href='http://localhost:3001/signup?'>Sign-Up</a>
                    </div>
                    }
                    
            </div>
        );
    }
}

export default NavBar;