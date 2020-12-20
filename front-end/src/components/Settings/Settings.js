import React from 'react';
import './Settings.css';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';

function Settings() {
    function confirmation () {
        var response = false;
        response = window.confirm("Are you sure ?");
        if (response === true ) {
            /* Delete user in database, delete token in storage and redirect to login */
            localStorage.removeItem("token");
        }
        else{
        }
    }
    return (
        <div className="settings">
            <Link to="/login">
                <IconButton aria-label="Home" style={{color: 'white', fontSize: "12px", marginLeft: '30px'}}>
                    <HomeIcon/>
                    <p>Home</p>
                </IconButton>
            </Link>
            <div className="settings-box">
            <h1>Settings</h1>
            <Button onClick = { () => { confirmation() }} className="button" variant="contained" color="secondary" size="small">
                Delete my account
            </Button>
            </div>
        </div>
    )
}

export default Settings;
