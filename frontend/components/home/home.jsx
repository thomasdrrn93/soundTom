import React from 'react';
import SessionModal from '../modals/session_modal';

class Home extends React.Component {
    constructor(props){
      super(props);
    }

  render(){
    return(
      <div className="app">

        <div id="top-section">
          <div id="top-section-buttons">
          &nbsp;
          <SessionModal type="Sign In"/>
          &nbsp;
          <SessionModal type="Sign Up"/>
          </div>
          <div className="top-section-center">
            <h2 id="top-section-center-title">Connect on SoundTom</h2>
            <p id="top-section-center-text">Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</p>
            <SessionModal type="Sign up for free" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
