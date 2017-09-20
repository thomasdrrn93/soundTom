import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import TrackEditModalContainer from '../modals/edit_track_modal_container';
import Wavesurfer from 'react-wavesurfer';
import { withRouter } from 'react-router-dom';
import createPeak from '../../util/peaks_util';


class TrackItem extends React.Component{
  constructor(props){
    super(props);
    const playing = this.props.currentSong.id === this.props.track.id &&
    this.props.status === 'play' ? true : false;
    this.state = {
      playing: playing,
      pos: 0,
      volume:0
    };

    this.handleAudio = this.handleAudio.bind(this);
    this.findQueue = this.findQueue.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   const playing = nextProps.currentSong.id === nextProps.track.id &&
  //   nextProps.status === 'play' ? true : false;
  //   this.setState({playing: playing});
  // }

  deleteTrack(){
    this.props.deleteTrack(this.props.track);
  }

  handlePosChange(e) {
   this.setState({
       pos: e.originalArgs[0]
     });
   }

  handleAudio(){
    if (this.props.currentSong === this.props.track){
      if (this.props.status === 'pause'){
        this.props.receiveCurrrentTrack(this.props.track, 'play',
          this.findQueue());
      } else {
        this.props.receiveCurrrentTrack(this.props.track, 'pause',
          this.findQueue());
      }
    } else {
        this.props.receiveCurrrentTrack(this.props.track, 'play',
          this.findQueue());
    }
  }

  handleLike(){
    if (this.props.track.liked_users.includes(this.props.currentUser.id)){
      this.props.deleteLike(
        {like: {track_id: this.props.track.id,
          user_id: this.props.currentUser.id}});
    } else{
      this.props.createLike({like: {track_id: this.props.track.id,
        user_id: this.props.currentUser.id}});
    }
  }

  findQueue(){
    const cb = (elm) => {return elm === this.props.track;};
    const queue = this.props.queue;
    const index = queue.findIndex(cb);
    const second = queue.slice(index + 1, queue.length);
    const first = queue.slice(0, index);
    return second.concat(first).concat(queue[index]);
  }

  render(){
    const playB = this.props.currentSong === this.props.track &&
    this.props.status === 'play' ?
    <div className='circle-medium' onClick={this.handleAudio}>
      <div className="circle-inner-medium-pause-left"></div>
      <div className="circle-inner-medium-pause-right"></div>
    </div>: <div className="circle-medium"onClick={this.handleAudio}>
      <div className="circle-inner"></div>
      </div>;
      const edit = this.props.currentUser.id === this.props.track.uploader_id ?
        <TrackEditModalContainer track={this.props.track} /> : <div></div>;
      const remove = this.props.currentUser.id ===
          this.props.track.uploader_id ? <div className='delete-button'
            onClick={this.deleteTrack}><i className="fa fa-trash"
              aria-hidden="true"></i>Delete</div>
        : <div></div>;
        const likes = this.props.track.liked_users.includes(
            this.props.currentUser.id) ?
            <div className='like-button'
                  onClick={this.handleLike}>
              <i className="fa fa-heart"
                 aria-hidden="true">
              </i>{this.props.track.liked_users.length}
            </div> :
            <div className='delete-button'
                  onClick={this.handleLike}>
              <i className="fa fa-heart"
                 aria-hidden="true">
              </i>{this.props.track.liked_users.length}
            </div>;

        const wave = this.props.track.waves.length === 0 ? <Wavesurfer
          audioFile={this.props.track.audio}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          onReady={ (elm) => {this.props
            .updateTrack({track : {id: this.props.track.id,
              waves: elm.wavesurfer.backend.mergedPeaks.toString()}});}}

          options={
            {
            waveColor: '#f999',
            progressColor: '#f50',
            height: 100,
            barWidth: 2,
            cursorColor: 'transparent'}
          }
          /> : <Wavesurfer
            audioFile={this.props.track.audio}
            pos={this.state.pos}
            onPosChange={this.handlePosChange}
            audioPeaks={this.props.track.waves}
            volume='0'
            options={
              {
              waveColor: '#999',
              progressColor: '#f50',
              height: 100,
              barWidth: 2,
              fillParent: true,
              cursorColor: 'transparent'}
            } />;
    const title = this.props.location.pathname === '/stream' ?
    <div id= 'track-item-title'>
      <img src={this.props.track.user_pic} className='nav-pic' />
      <div id='title-text'>
        {this.props.track.user} posted a track {this.props.track.created} ago
      </div>
    </div> : <div></div>;
    return(
      <div>
        {title}
        <li key={this.props.track.id} className='single-track'>
            <img className='track-item-pic' src={this.props.track.image}/>
            <div className= 'track-item-info-container'>
              <div className='track-item-info'>
                {playB}
                <div className='track-user-song'>
                  <Link to={`/users/${this.props.track.uploader_id}`}>
                    <div className= 'user-page-link'>{this.props.track.user}
                    </div>
                  </Link>
                  <Link to={`/tracks/${this.props.track.id}`}>
                    <div className= 'track-page-link'>{this.props.track.name}
                    </div>
                  </Link>
                </div>
              </div>
              <div className='buttons'>
                {likes}
                {edit}
                {remove}
              </div>
            </div>
        </li>
      </div>
    );
  }
}

export default withRouter(TrackItem);


// <div className='track-genre'>
//   <div className='genre-text'>{this.props.track.genre}</div>
// </div>
