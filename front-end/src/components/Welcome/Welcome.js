import {} from 'react';
import "./Welcome.css"
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as ChannelIcon} from '../../icons/channel.svg';
import {ReactComponent as FriendsIcon} from '../../icons/friends.svg';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';


export default () => {
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
            <Typography color="textPrimary">
              Create channels
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div className="card">
            <FriendsIcon className="icon" />
            <Typography color="textPrimary">
              Invite friends
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div className="card">
            <SettingsIcon className="icon" />
            <Typography color="textPrimary">
              Settings
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
