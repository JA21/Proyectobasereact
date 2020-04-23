
import React from 'react';

export default class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });
    };

    handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
    };

    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        const { email, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);
    };

    canBeSubmitted() {
        const { email, password } = this.state;
        return email.length > 0 && password.length > 0;
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <div className="General__Login__LoginForm__Checkbox">
                            <input type="checkbox" />
                            <label>Remenber me</label>
                            


                        </div>
                        <div>
                            <button disabled={!isEnabled}>Sign up</button>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}