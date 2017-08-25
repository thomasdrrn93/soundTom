import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class TrackShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneTrack({id: this.props.match.params.id});
 }

  render() {
    const track = this.props.track;
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
            <div className="circle">
              <div className="circle_inner"></div>
            </div>
            <div className='track-left-profile'>
              <div className= 'set-space-div'>
                <div className='track-show-artist'>Artist</div>
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
              <img className='track-profile-pic' src= {track.image_url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TrackShow;
