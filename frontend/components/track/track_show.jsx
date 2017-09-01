import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';
import Wavesurfer from 'react-wavesurfer';

class TrackShow extends React.Component{
  constructor(props){
    super(props);
    const playing = this.props.currentSong.id === this.props.track.id &&
    this.props.status === 'play' ? true : false;
    this.state = {
      body: '',
      pos: 0,
      playing: playing,
      volume: 0

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
    const playing = nextProps.currentSong.id === nextProps.track.id &&
    nextProps.status === 'play' ? true : false;
    this.setState({playing: playing});
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
    const waves = this.props.track.waves || [];
    const wave = waves.length === 0 ? <Wavesurfer
      audioFile={this.props.track.audio}
      pos={this.state.pos}
      onPosChange={this.handlePosChange}
      playing={this.state.playing}
      volume={this.state.volume}
      onReady={ (elm) => {this.props
        .updateTrack({track : {id: this.props.track.id,
          waves: elm.wavesurfer.backend.mergedPeaks.toString()}});}}

      options={
        {
        waveColor: '#999',
        progressColor: '#f50',
        height: 100,
        barWidth: 2,
        cursorColor: 'transparent'}
      }
      /> : <Wavesurfer
        audioFile={this.props.track.audio}
        pos={this.state.pos}
        onPosChange={this.handlePosChange}
        playing={this.state.playing}
        audioPeaks={this.props.track.waves}
        volume={this.state.volume}
        options={
          {
          waveColor: '#999',
          progressColor: '#f50',
          height: 100,
          barWidth: 2,
          fillParent: true,
          cursorColor: 'transparent'}
        } />;
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
              <div className='track-show-upload'>{track.created} ago</div>
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
