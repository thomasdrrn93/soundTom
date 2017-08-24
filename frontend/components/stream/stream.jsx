import React from 'react';
import TrackItem from '../track/track_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Stream extends React.Component{
  constructor(props){
    super(props);
  }
   componentWillMount(){
     this.props.fetchAllTracks();
   }
  render(){
    const tracks = this.props.tracks;
    return (
      (typeof tracks === 'undefined') ?
      <div>
        <header>
          <NavBarContainer />
        </header>
      </div> :
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className='after-header'>
          <div className='title'>
            <div className='title-text'>Stream</div>
          </div>
          <ul id='stream-track-list' className='stream'>
            {tracks.map(track => <TrackItem key={track.id} track={track} />)}

          </ul>
        </div>
      </div>
    );
  }
}

export default Stream;
