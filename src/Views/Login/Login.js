//import '../scss/loginstyle.scss';
//geremias 33 versiculo 6
//versiculo 2 romanos https://www.arsys.es/blog/programacion/diseno-web/campos-input-texto-css/
import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom'

//importando card

import { Card } from 'antd';

//importando nabvar


//importando footer



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
               
                 

                    <div className="General__Login">
                        <form onSubmit={this.Send}>
                            <div className="General__Login__LoginForm">

                                <Card title="Login Form" className="CARD" bordered={false} >

                                    <h2 className="General__Login__LoginForm--h2">Rellene el siguiente formulario para iniciar sesión</h2>

                                    <div className="General__Login__LoginForm__Inputs">

                                        <input type="text"
                                            placeholder="User enter"
                                            value={this.state.user}
                                            onChange={this.sendChangeUser}
                                            className="General__Login__LoginForm__Inputs--Decoration"
                                            
                                        />


                                        <input type="password"
                                            placeholder="Password enter"
                                            value={this.state.password}
                                            onChange={this.sendChangePassword}
                                            className="General__Login__LoginForm__Inputs--Decoration"
                                        />

                                    </div>
                                    <div className="General__Login__LoginForm__Checkbox">
                                        <input type="checkbox" />
                                        <label className="General__Login__LoginForm__Checkbox--label">Remenber me</label>
                                        <Router>
                                            <Link to="/" className="General__Login__LoginForm__Checkbox--StyleFormRegistre">Forgot remenber</Link>
                                        </Router>


                                    </div>

                                    <div className="General__Login__LoginForm__Button">
                                        <button className="General__Login__LoginForm__Button--ButtonLogin" disabled={!ischeck} >Login</button>
                                    </div>

                                </Card>

                            </div>
                        </form>




                    </div >

               
               
            </div>
        );

    }
}