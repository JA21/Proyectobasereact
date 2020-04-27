import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Views 
import Home from '../Views/home/home';
 import Login from '../Views/Login/Login';
import FormLogin from '../Views/FormRegistro/FormRegistro';


export default class Rutas extends Component {
    render() {
        return (
            <div>
                <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/FormLogin" component={FormLogin}/>
                </Router>
            </div>
        );
    }
}




