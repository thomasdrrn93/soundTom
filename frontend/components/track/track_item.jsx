import React from 'react';
import { Link } from 'react-router-dom';

class TrackItem extends React.Component{
  constructor(props){
    super(props);

    this.handleAudio = this.handleAudio.bind(this);
    this.findQueue = this.findQueue.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
  }

  deleteTrack(){
    this.props.deleteTrack(this.props.track);
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
        <div className='edit-button'>Edit</div> : <div></div>;
      const remove = this.props.currentUser.id ===
          this.props.track.uploader_id ? <div className='delete-button'
            onClick={this.deleteTrack}>Delete</div>
        : <div></div>;
    return(
      <li key={this.props.track.id} className='single-track'>
          <img className='track-item-pic' src={this.props.track.image}/>
          <div className= 'track-item-info-container'>
            <div className='track-item-info'>
              {playB}
              <div className='track-user-song'>
                <Link to={`/users/${this.props.track.uploader_id}`}>
                  <div className= 'user-page-link'>{this.props.track.user}</div>
                </Link>
                <Link to={`/tracks/${this.props.track.id}`}>
                  <div className= 'track-page-link'>{this.props.track.name}</div>
                </Link>
              </div>
            </div>
            <div className='buttons'>
              {edit}
              {remove}
            </div>
          </div>
      </li>
    );
  }
}

export default TrackItem;


// <div className='track-genre'>
//   <div className='genre-text'>{this.props.track.genre}</div>
// </div>
