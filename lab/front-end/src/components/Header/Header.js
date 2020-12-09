/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import './Header.css';
import ForumIcon from '@material-ui/icons/Forum';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Tooltip } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
            <ForumIcon/>
            </div>
            <div className="header-title">
                <h1>ECE WEBCHAT</h1>
            </div>
            <div className="header-right">
                <Tooltip title="Github">
                    <GitHubIcon onClick={event => window.location.href='https://github.com/alexandrewk/chat-project'} />
                </Tooltip>
            </div>
        </div>
    )
}

export default Header;
