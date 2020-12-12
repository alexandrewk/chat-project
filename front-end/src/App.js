import {useState} from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Login from './components/Login/Login';


export default () => {
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
    <div className="App">
        <Header />
            {
            user ? <Main /> : <Login onUser={setUser} />
            }
        <Footer />
    </div>
    );
}
