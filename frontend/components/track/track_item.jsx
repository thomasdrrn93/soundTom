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
    return(
      <li key={this.props.track.id} className='single-track'>
          <img onClick= {this.handleAudio} className='track-item-pic' src={this.props.track.image}/>
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
