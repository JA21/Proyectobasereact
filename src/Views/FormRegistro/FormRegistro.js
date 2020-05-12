
import React from 'react';

// import { BrowserRouter as Router, Route } from 'react-router-dom'

//importando estilos
import '../scss/FormRegistry.scss';

//importando estilos

// import Footer from '../Footer/footers';

export default class SignUpForm extends React.Component {

    render() {

        return (
            <div className="Principal">

                <div className="Principal__FormRegistry">
                    <div className="Principal__FormRegistry__titles">
                        <h1 className="Principal__FormRegistry__titles--titleh1">Form registry</h1>
                        <h3 className="Principal__FormRegistry__titles--titleh3" >Enter your information</h3>
                        </div>
                    <form >
                        <div className="Principal__FormRegistry__inputs">


                            <input
                                type="text"
                                placeholder="Name" 
                                className="Principal__FormRegistry__inputs--StyleInputs"/>
                                
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="Principal__FormRegistry__inputs--StyleInputs" />

                            <input type="email"
                                placeholder="Email"
                                className="Principal__FormRegistry__inputs--StyleInputs" />

                            <input type="password"
                                placeholder="Password" 
                                className="Principal__FormRegistry__inputs--StyleInputs"/>


                        </div>
                        <div className="Principal__FormRegistry__buttons">
                          
                            <button className="Principal__FormRegistry__buttons--StyleButtons">Check in</button>
                            <button className="Principal__FormRegistry__buttons--StyleButtons">Login</button>


                        </div>
                        
                    </form>
                    {/* <div className="Principal__FormRegistry--footer">
                        <Router>
                            <Route path="/" exact component={Footer} />
                        </Router>
                    </div> */}
                </div>



            </div>
        );
    }
}