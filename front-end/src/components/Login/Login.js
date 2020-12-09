import {React,Component} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import "./Login.css"


export default ({
  onUser
}) => {
  return (
    <div className="login">
      <div>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />
        </fieldset>
        <fieldset>
          <input type="submit" value="Login" onClick={ (e) => {
            e.stopPropagation()
            onUser({username: 'david'})
          }} />
        </fieldset>
      </div>
    </div>
  );
}
