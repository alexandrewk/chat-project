import {} from 'react';
import "./Welcome.css"
/** @jsx jsx */
import { jsx } from '@emotion/core'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as ChannelIcon} from '../../icons/channel.svg';
import {ReactComponent as FriendsIcon} from '../../icons/friends.svg';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome">
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            >
            <Grid item xs>
                <div className="card">   
                <ChannelIcon className="icon" />  
                <Typography color="initial">
                    Create channels
                </Typography>
                </div>
            </Grid>
            <Grid item xs>
            <div className="card">
                <Link to="/settings">
                    <SettingsIcon className="icon" />
                </Link>
                <Typography color="initial">
                Settings
                </Typography>
            </div>
            </Grid>
            </Grid>
        </div>
    );
}

export default Welcome;
