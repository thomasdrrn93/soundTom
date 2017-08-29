import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import TrackItemContainer from '../track/track_item_container';
class UserPage extends React.Component{
  constructor(props){
    super(props);

    this.updateProfile = this.updateProfile.bind(this);
    this.updateCover = this.updateCover.bind(this);
  }
  componentDidMount(){
    this.props.fetchOneUser({id: this.props.match.params.id});
  }

  updateProfile(e){
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("user[profile_pic]", file);
    this.props.updateUser(formData, this.props.user.id);
  }

  updateCover(e){
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("user[cover_pic]", file);
    this.props.updateUser(formData, this.props.user.id);
  }

  render() {
    const user = this.props.user;
    const tracks = this.props.tracks;
    const bStyle = user ? {background: 'url(' + user.cover_pic + ')'} : {};
    const location =<div className='artist-location'>location</div>;
    const profile = this.props.currentUser.id === this.props.user.id ?
    <form className='artist-upload-pic'> <label>
        <div className='artist-profile-pic'>Update Image</div>
        <input type='file' className='file-input'
          onChange={this.updateProfile} />
      </label> </form> : <div></div>;
      const cover = this.props.currentUser.id === this.props.user.id ?
      <form className='artist-upload-cover'>
        <label>
          <div className='artist-cover-pic'>Update Header Image</div>
          <input type='file' className='file-input'
            onChange={this.updateCover} />
        </label>
      </form> : <div></div>;
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
              {profile}
              <div className='artist-and-location'>
                <div className='artist-name'>{user.username} </div>
                {location}
              </div>
            </div>
            {cover}
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
