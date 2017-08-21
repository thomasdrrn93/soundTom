import React from 'react';
import LoginContainer from '../session_form/login_container';
import SignupContainer from '../session_form/signup_container';

class Home extends React.Component {
    constructor(props){
      super(props);
    }

  render(){
    return(
      <div className="app">
        <div id="top-section">
          <div id="top-section-buttons">
            <button className="button" id="sign-in" type="button" name="Sign In" onClick= '<LoginContainer />'>Sign in</button>
            <button className="button" id="create-account" type="button" name="Create Account" onClick= '<SignupContainer />'>Create account</button>
          </div>
          <div className="top-section-center">
            <h2 id="top-section-center-title">Connect on SoundCloud</h2>
            <p id="top-section-center-text">Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</p>
            <button className="button" id="sign-up" type="button" name="Sign Up" onClick= '<SignupContainer />'>Sign up for free</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
