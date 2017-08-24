import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class TrackShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneTrack({id: this.props.match.params.id});
 }

  render(){
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
            <div className='left-profile'>
              <div className='track-name'>{track.name}</div>
              <div className='track-genre'>{track.genre}</div>
            </div>
            <div className='right-profile'>
              <img className='track-profile-pic' src= {track.image_url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TrackShow;
