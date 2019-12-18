import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'


// import reducer from './reducer'



ReactDOM.render(
    
        <Router>
            <Route path='/' component={App}/>
        </Router>
    ,
    document.getElementById('root'));

    // <Route path='/' component={App}/> === <Route path='/' render={(routerProps)=><App {...routerProps} />}/>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

