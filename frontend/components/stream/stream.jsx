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
    debugger;
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
          <ul id='stream-track-list'>
            {tracks.map(track => <TrackItem key={track.id} track={track} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stream;
