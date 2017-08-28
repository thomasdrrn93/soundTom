import React from 'react';
import { Link } from 'react-router-dom';

class TrackItem extends React.Component{
  constructor(props){
    super(props);

    this.handleAudio = this.handleAudio.bind(this);
  }

  handleAudio(){
    if (this.props.currentSong === this.props.track){
      if (this.props.status === 'pause'){
        this.props.receiveCurrrentTrack(this.props.track, 'play');
      } else {
        this.props.receiveCurrrentTrack(this.props.track, 'pause');
      }
    } else {
      this.props.receiveCurrrentTrack(this.props.track, 'play');
    }
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
    return(
      <li key={this.props.track.id} className='single-track'>
          <img className='track-item-pic' src={this.props.track.image}/>
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
      </li>
    );
  }
}

export default TrackItem;


// <div className='track-genre'>
//   <div className='genre-text'>{this.props.track.genre}</div>
// </div>
