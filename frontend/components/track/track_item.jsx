import React from 'react';
import { Link } from 'react-router-dom';

class TrackItem extends React.Component{
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(){
    this.audioTag.play();
  }



  render(){
    const audio = this.props.track.audio;
    return(
      <li key={this.props.track.id} className='single-track'>
          <img onClick= {this.playAudio} className='track-item-pic' src={this.props.track.image_url}/>
          <audio src={audio} ref={(elm) =>{this.audioTag = elm}}></audio>
          <div className='track-item-info'>
            <Link to={`/tracks/${this.props.track.id}`} className= 'track-page-link'>
              <div>{this.props.track.name}</div>
            </Link>
            <div className='track-genre'>
              <div className='genre-text'>{this.props.track.genre}</div>
            </div>
          </div>
      </li>
    );
  }
}

export default TrackItem;
