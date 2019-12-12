import React, {Component} from 'react';
import NavBar from './NavBar'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { Switch, Route } from 'react-router-dom'
class HomePage extends Component {

    renderLogin = ()=>{
        return <Login />
    }

    renderSignup = ()=>{
        return <Signup />
    }

    render() {
        return (
            <>
                <NavBar />
                <Switch>
                    <Route path='/signup' render={this.renderSignup} />
                    <Route path='/login' render={this.renderLogin} />
                </Switch>
            </>
        );
    }
};

export default HomePage;