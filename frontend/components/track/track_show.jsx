import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';

class TrackShow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      body: ''
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchOneTrack({id: nextProps.match.params.id});
    }
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

 handleChange(e){
   return (this.setState({
     body: e.currentTarget.value
   }));
 }

 handleSubmit(e){
   e.preventDefault();
   const comment = {comment: {commenter_id: this.props.currentUser.id,
     body: this.state.body, track_id: this.props.track.id}};
   this.props.createComment(comment);
  this.setState({body:''});
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
      (typeof track.id === 'undefined') ?
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
              <div className='track-show-upload'>{track.created}</div>
              <div className='track-show-genre'>{track.genre}</div>
            </div>
            <div className='track-right-profile'>
              <img className='track-profile-pic' src= {track.image} />
            </div>
          </div>
          <div id='comment-form-container'>
            <img src={this.props.currentUser.profile_pic} id='comment-pic' />
            <form onSubmit={this.handleSubmit}>
              <input id='create-comment' value={this.state.body}
                onChange={this.handleChange} placeholder='Write a Comment'>
              </input>
            </form>
          </div>
          <div id='post-comment-content'>
            <img id='track-show-artist' src={this.props.track.user_pic} />
            <div id='comment-index-container'>
              <div id='comment-count'>
                <i className="fa fa-comment" aria-hidden="true"></i>
                {this.props.comments} comments
              </div>
              <CommentsIndexContainer trackId={track.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TrackShow;
