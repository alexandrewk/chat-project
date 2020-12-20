import React, { useState, Component } from 'react';
import { Redirect, Switch, Route, Link } from "react-router-dom";

/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Channels from '../Channels/Channels';
import Channel from '../Channel/Channel';
import Welcome from '../Welcome/Welcome';
import Settings from '../Settings/Settings';
import "./Main.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false,
            welcome: true,
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };
    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
    }
}

export default () => {
    const [channel, setChannel] = useState(null)
    const fetchChannel = async (channel) => {
    setChannel(channel)
    }
    return (
        <main className="main">
            <Channels onChannel={fetchChannel} />
            {channel ? <Channel channel={channel} messages={[]} /> : <Welcome />}
        </main>
    );
}


