import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import TrackItemContainer from '../track/track_item_container';
class UserPage extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchOneUser({id: this.props.match.params.id});
  }


  render() {
    const user = this.props.user;
    const tracks = this.props.tracks;
    const bStyle = user ? {background: 'url(' + user.cover_pic + ')'} : {};
    const location =<div className='artist-location'>location</div>;
    return(
      (typeof user === 'undefined') ?
      <header>
        <NavBarContainer />
      </header>:
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className='after-header'>
          <div className='artist-show-profile'
            style= {bStyle}>
            <div className='artist-info'>
              <img src={user.profile_pic} className='user-pic' />
              <div className='artist-and-location'>
                <div className='artist-name'>{user.username}</div>
                {location}
              </div>
            </div>
          </div>
          <div className='title'>
            <div className='title-text'>Tracks</div>
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



export default UserPage;
