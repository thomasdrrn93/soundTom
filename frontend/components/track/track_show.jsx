import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component{
  constructor(props){
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneTrack({id: this.props.match.params.id});
 }

 handlePlay(){
   this.props.receiveCurrrentTrack(this.props.track, 'play');
 }

 handlePause(){
   this.props.receiveCurrrentTrack(this.props.track, 'pause');
 }

  render() {
    const track = this.props.track;
    const playB = this.props.currentSong && track &&
    this.props.currentSong.id === track.id &&
    this.props.status === 'play' ?
    <div className='circle-large' onClick={this.handlePause}>
      <div className="circle-inner-large-pause-left"></div>
      <div className="circle-inner-large-pause-right"></div>
    </div>: <div className="circle-large" onClick={this.handlePlay}>
      <div className="circle-inner"></div>
    </div>;
    return(
      (typeof track === 'undefined') ?
      <header>
        <NavBarContainer />
      </header>:
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className='after-header'>
          <div className= 'track-show-profile'>
            {playB}
            <div className='track-left-profile'>
              <div className= 'set-space-div'>
                <Link to={`/users/${track.uploader_id}`}
                  className='track-show-artist'>
                {track.user}
                </Link>
              </div>
              <div>
                <div className='track-show-name'>{track.name}</div>
              </div>
            </div>
            <div className='track-center-profile'>
              <div className='track-show-upload'>2 Days</div>
              <div className='track-show-genre'>{track.genre}</div>
            </div>
            <div className='track-right-profile'>
              <img className='track-profile-pic' src= {track.image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TrackShow;
