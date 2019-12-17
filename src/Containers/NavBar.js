import React, { Component } from 'react';

class NavBar extends Component {
    
    state = {
        login: false
    }

    render() {
        return (
            <header>
            <div className = 'navbar'>
                    <a href='http://localhost:3000/home'>
                        <img src='./images/image.png' className="logo" alt='meh'/>
                    </a>
                    {this.state.login
                    ?
                    <div className="user-action">
                        <a href={'http://localhost:3000/username'}>username</a>&nbsp;
                        |
                        &nbsp;<a href='http://localhost:3000/'>LogOut</a>
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