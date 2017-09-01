import React from 'react';
import TrackItemContainer from '../track/track_item_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Search extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const tracks = this.props.tracks;
    return(
      (typeof tracks === 'undefined') ?
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className='after-header'>
          <div className='title'>
              Search results for
          </div>
          <div> No results found</div>
        </div>
      </div> :
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className='after-header'>
          <div className='title'>
            Search results for
          </div>
          <ul id='stream-track-list' className='stream'>
            {tracks.map(track => <TrackItemContainer key={track.id}
              track={track} queue={tracks} />)}

          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
