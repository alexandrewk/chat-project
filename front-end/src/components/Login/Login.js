import { Component } from 'react';
import { Redirect, Link  } from "react-router-dom";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import "./Login.css"
import { Button } from '@material-ui/core';

const axios = require('axios')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "",
                user_password: ""
            }
        };
    }
    
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };
   
    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "Bob" && user_password === "test") {
        localStorage.setItem("token", "T");
        this.setState({
            islogged: false
        });
        }
        else{
            alert("Username or password don't match");
        }
        event.preventDefault();
    };

    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />;
        }
        return (
            <div className="login">
                <div>
                    <form onSubmit={this.login}>
                        <h1>Please sign in</h1>
                        <div className="form-item">
                        <div className="col">
                            <input
                            type="text"
                            name="user_id"
                            onChange={this.handleFormChange}
                            placeholder="Enter Username"
                            />
                            <input
                            type="password"
                            name="user_password"
                            onChange={this.handleFormChange}
                            placeholder="Enter Password"
                            />
                            <input type="submit" value="Login" />
                        </div>
                        </div>
                        <p>Try the app : username 'Bob', password 'test'</p>
                    </form>
                </div>
                <Link to="/register">
                    <Button type="button" variant="contained" color="default" size="small">
                        Register
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Login;