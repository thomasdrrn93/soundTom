import React from 'react';
import TrackItem from '../track/track_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Stream extends React.Component{
  constructor(props){
    super(props);
  }
   componentWillMount(){
     debugger;
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
        <div>
          <ul>
            {tracks.map(track => <TrackItem key={track.id} pokemon={track} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stream;
