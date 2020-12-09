import {useState} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Channels from '../Channels/Channels'
import Channel from '../Channel/Channel'
import Welcome from '../Welcome/Welcome'
import "./Main.css"

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
