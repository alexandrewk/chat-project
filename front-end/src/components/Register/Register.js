import React from 'react';
import { Redirect, Link  } from "react-router-dom";
import './Register.css'

const axios = require('axios')


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            registerParams: {
            user_id: "",
            user_password: "",
            user_confirm_password: "",
            },
        };
    }

    handleFormChange = event => {
        let registerParamsNew = { ...this.state.registerParams };
        let val = event.target.value;
        registerParamsNew[event.target.name] = val;
        this.setState({
          registerParams: registerParamsNew
        });
    };

    register = async event =>  {
        if (this.state.registerParams.user_password !== this.state.registerParams.user_confirm_password) {
            alert("Passwords don't match");
        }
        else {
            axios.post('http://localhost:3001/users', {
            username: this.state.registerParams.user_id,
            password: this.state.registerParams.user_password,
            settings: 0, 
            }).then(() => this.setState({redirect: true}));
            event.preventDefault();
            alert("Account successfully created");
        }
    };
    
    render () {
        if (this.state.redirect) {
            return (
            <Redirect to= {{ pathname: "/login" }} />
            )
        }
        return (
        <div className="register">
            <div>
                <form onSubmit={this.register}>
                <h1>New Account</h1>
                    <div className="form-item">
                        <div className="col">
                        <input
                            type="text"
                            name="user_id"
                            onChange={this.handleFormChange}
                            placeholder="Your Username"
                        />
                        <input
                            type="password"
                            name="user_password"
                            onChange={this.handleFormChange}
                            placeholder="Your Password"
                        />
                        <input
                            type="password"
                            name="user_confirm_password"
                            onChange={this.handleFormChange}
                            placeholder="Confirm Your Password"
                        />
                        <input type="submit" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
            <Link to="/login">
            <button type="button">
                Login
            </button>
            </Link>
        </div>
      );
    }
}


export default Register;
