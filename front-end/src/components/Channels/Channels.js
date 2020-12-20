import {useState, useEffect} from 'react';
import "./Channels.css"
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function signOut () {
    localStorage.removeItem("token");
};

function Channels({onChannel}) {

    const [channels, setChannels] = useState([])
    useEffect( () => {
        const fetch = async () => {
            const {data: channels} = await axios.get('http://localhost:3001/channels')
        setChannels(channels)
        }
        fetch()
    }, [])
    
    return (
        <div className="channels">
            <div className="channels-home">
                <Link to="/login">
                    <IconButton onClick={ () => {signOut()}} aria-label="Home" style={{color: 'white', fontSize: "12px"}}>
                        <ExitToAppIcon/>
                        <p>Logout</p>
                    </IconButton>
                </Link>    
                <Link to="/login">
                    <IconButton aria-label="Home" style={{color: 'white', fontSize: "12px"}}>
                        <HomeIcon/>
                        <p>Home</p>
                    </IconButton>
                </Link>    
            </div>
            <div className="channels-header">
                <h2>My Channels</h2>
            </div>
            <ul className="channels-list">
                { channels.map( (channel, i) => (
                    <li key={i} className="channels-link">
                    <Link
                        style={{textDecoration: "none",
                        color: "#9198e5"}}
                        href="#"
                        onClick={ (e) => {
                        e.preventDefault()
                        onChannel(channel)
                        }}
                        >
                        {channel.name}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Channels;
