import {useState} from 'react'
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './Main'
import Login from './Login'

const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
  },
}

export default () => {
  const [user, setUser] = useState(null)
  return (
    <div className="App" css={styles.root}>
      <Header />
      {
        user ? <Main /> : <Login onUser={setUser} />
      }
      <Footer />
    </div>
  );
}
