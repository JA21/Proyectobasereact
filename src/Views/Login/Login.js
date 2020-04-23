//import '../scss/loginstyle.scss';

import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

//importando card

import { Card } from 'antd';

//importando nabvar
import Navbar from '../Navbar/Navbar';

//importando footer

import Footer from '../Footer/footers';

export default class Login extends Component {
    //intento de mensaje al mandar el usuario

    constructor() {
        super();
        this.state = {
           user:"",
           password:""

        };
    }   


    sendChangeUser= evt=>{
        this.setState({user: evt.target.value});
    };

    sendChangePassword= evt => {
        this.setState({password: evt.target.value});
    }

    


    CheckButton = evt => {
        if (!this.Send()) {
            evt.preventDefaul();
            return;
        }
        const { user, password } = this.state;
        alert(`Bienvenido: ${user} pasword ${password}`);

    };

    Send() {

        const { user, password } = this.state;

        return user.length > 0 && password.length > 0;
    }


    render() {

        const ischeck = this.Send();


        return (
            <div className="General">
                <div>
                    <Router>
                        <Route path="/" exact component={Navbar} />
                    </Router>

                    <div className="General__Login">
                        <form onSubmit={this.Send}>
                            <div className="General__Login__LoginForm">

                                <Card title="Login Form" className="CARD" bordered={false} style={{ width: 300 }}>

                                    <h2>Rellene el siguiente formulario para iniciar sesión</h2>

                                    <div className="General__Login__LoginForm__Inputs">

                                        <input type="text"
                                            placeholder="User enter"
                                            value={this.state.user}
                                            onChange={this.sendChangeUser}
                                            
                                        />


                                        <input type="password"
                                            placeholder="Password enter"
                                            value={this.state.password}
                                            onChange={this.sendChangePassword}
                                        />

                                    </div>
                                    <div className="General__Login__LoginForm__Checkbox">
                                        <input type="checkbox" />
                                        <label>Remenber me</label>
                                        <Router>
                                            <Link to="/" className="styleohome">Forgot remenber</Link>
                                        </Router>


                                    </div>

                                    <div className="Login__LoginForm__Button">
                                        <button disabled={!ischeck} className="ButtonLogin">Login</button>
                                    </div>

                                </Card>

                            </div>
                        </form>




                    </div >

                </div>
                <div>
                    <Router>
                        <Route path="/" exact component={Footer} />
                    </Router>
                </div>
            </div>
        );

    }
}