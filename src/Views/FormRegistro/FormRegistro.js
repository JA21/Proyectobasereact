
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
                    <div className="Principal__FormRegistry--titles">
                        <h1>Form registry</h1>
                        <h3>Record your information</h3>
                    </div>
                    <form >
                        <div className="Principal__FormRegistry__inputs">


                            <input
                                type="text"
                                placeholder="Name" />
                            <input
                                type="text"
                                placeholder="Last Name" />

                            <input type="email"
                                placeholder="Email" />

                            <input type="password"
                                placeholder="Password" />


                        </div>
                        <div className="Principal__FormRegistry--buttons">
                            <input type="checkbox" />
                            <label>Remenber me</label>
                            <button >Registry</button>


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