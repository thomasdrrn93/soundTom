import React from 'react';
import SessionModalContainer from '../modals/session_modal_container';
import TrendingTrackContainer from '../track/trending_track_container';

class Home extends React.Component {
    constructor(props){
      super(props);
      this.guestLogin = this.guestLogin.bind(this);
    }

    guestLogin(e){
      e.preventDefault();
      const user= {username: 'guest', password: 'password'};
      this.props.login({user});
    }

    componentDidMount(){
      this.props.fetchAllTracks();
    }

  render(){
    const tracks = this.props.tracks;
    return(
      <div className="app">
        <div id='section'>
          <div id="top-section">
            <div id="top-section-buttons">
              <button className='button' id='guest'
                onClick={this.guestLogin}>Guest Demo</button>
              &nbsp;
              <SessionModalContainer type="Sign In"/>
              &nbsp;
              <SessionModalContainer type="Sign Up"/>
            </div>
            <div className="top-section-center">
              <h2 id="top-section-center-title">Connect on SoundTom</h2>
              <p id="top-section-center-text">Discover, stream,
                and share a constantly expanding mix of music from
                emerging and major artists around the world.</p>
              <SessionModalContainer type="Sign up for free" />
            </div>
          </div>
          <div id='mid-section'>
            <div id="trending-tracks">
              <div id="trending-tracks-title">
                Hear what’s trending for free in the SoundTom community
              </div>
              <div id="trending-tracks-row">
                <ul id="trending-tracks-list">
                  {tracks.map(track => <TrendingTrackContainer key={track.id}
                    track={track} queue={tracks} />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
