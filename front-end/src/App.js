import React, {useState, Component } from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Settings from './components/Settings/Settings';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    window.localStorage.clear()
    const [user, setUser] = useState(false)
    const handleLogin = e => {
        e.preventDefault();
        setUser(true);
    }
    const handleLogout = e => {
        e.preventDefault();
        setUser(false);
    }
    return ( 
    <Router>
        <Switch>
            <Route path="/register">
                <div className="App">
                    <Header />
                        <Register/>
                    <Footer />
                </div>
            </Route>
            <Route path="/login">
                <div className="App">
                    <Header />
                        <Login onUser={setUser} />
                    <Footer />
                </div>
            </Route>
            <ProtectedRoute path="/dashboard">
                <div className="App">
                    <Header />
                        <Main />
                    <Footer />
                </div>
            </ProtectedRoute>
            <ProtectedRoute path="/settings">
                <div className="App">
                    <Header />
                        <Settings/>
                    <Footer />
                </div>
            </ProtectedRoute>
            <Route exact path="/">
                <Redirect exact from="/" to="dashboard" />
            </Route>
            <Route path="*">
                <Redirect from="/" to="dashboard" />
            </Route>
        </Switch>
    </Router>
    );
}

export default App;

