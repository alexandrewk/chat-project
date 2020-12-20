import React, {Component} from 'react';
import { Redirect, Link  } from "react-router-dom";
import { Button } from '@material-ui/core';
import "./ChannelCreation.css";
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';

const axios = require('axios');

class ChannelCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newChannelParams: {
                channelName: "",
                channelMembers: "",
            }
        };
    }
    channelCreation = async event => {
        var i=0;
        /*
        var members = this.state.channelMembers.split(",");
        axios.post('http://localhost:3001/channels',{
            name: this.state.newChannelParams.channelName,
        });
        //var channelId = get channel id 
        for (i in members.length) {
            userId = members[i];
            axios.update(`http://localhost:3001/users/${userId}`, {
                channels: channels.push(channelId)
            });
        }       
        */
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };
    render() {
        return (
            <div className= "channel-creation">
                <Link to="/login">
                <IconButton aria-label="Home" style={{color: 'white', fontSize: "12px", marginLeft: '30px'}}>
                    <HomeIcon/>
                    <p>Home</p>
                </IconButton>
                </Link>
                <div className= "channel-creation-box">
                    <form onSubmit={this.channelCreation}>
                        <input
                            type = "text"
                            name = "channelName"
                            onChange={this.handleFormChange}
                            placeholder = "Channel Name"
                        >
                        </input>
                        <input
                            type = "text"
                            name = "channelMembers"
                            onChange={this.handleFormChange}
                            placeholder = "Channel Members : Separate the usernames by a , sign."
                        >
                        </input>
                        <input type="submit" value="Create Channel"/>
                    </form>
                </div>
           </div>
        );
    }
}

export default ChannelCreation;
