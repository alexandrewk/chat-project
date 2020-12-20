import React from 'react';
import './Settings.css';
import { Button } from '@material-ui/core';

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
            <h1>Settings</h1>
            <Button onClick = { () => { confirmation() }} className="button" variant="contained" color="secondary" size="small">
                Delete my account
            </Button>
        </div>
    )
}

export default Settings;
