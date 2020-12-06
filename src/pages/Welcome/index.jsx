import React from 'react';
import { Link } from 'react-router-dom';

// import Button from '../../components/index';
import './Welcome.scss';

export const Welcome = () => {
  return (
    <div className="login">
      <div className="login__header">
          <h1>
              Welcome to 
              <span className="login__header_high bold">Red Tetris</span>
              <span className="login__header_small bold">play, chat, connect.</span>
          </h1>
      </div>
      <div className="login__main">
          <div className="login__action">
              {/* <Button type="facebook" subClass="facebook" href="/signIn/facebook" text="Continue with Facebook"/>
              <Button type="mail" subClass="mail" href="/signin" text="SignIn with Mail"/> */}
              <div className="login__alt">
                  Not able to login?
                  <Link to='/' className="red-link">
                      Try here
                  </Link>
              </div>
              <Link className="green-link" to='/signup'>
                  Create an account
              </Link>
          </div>
          <div className="version">
              version 1.0
          </div>
      </div>
    </div>
  );
}