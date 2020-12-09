import {useState, useEffect} from 'react';
import "./Channels.css"
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'

export default ({
  onChannel
}) => {
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
            <ul>
                <li><Link to={"../Welcome/Welcome"}>Home</Link></li>
            </ul>
        </div>
        <div className="channels-header">
            <h2>My Channels</h2>
        </div>
        <ul className="channels-list">
        { channels.map( (channel, i) => (
            <li key={i} className="channels-link">
            <Link
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
