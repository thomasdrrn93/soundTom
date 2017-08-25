import React from 'react';
import TrackItemContainer from '../track/track_item_container';
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
            {tracks.map(track => <TrackItemContainer key={track.id} track={track} />)}

          </ul>
        </div>
      </div>
    );
  }
}

export default Stream;
