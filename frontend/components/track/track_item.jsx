import React from 'react';

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
      <li key={this.props.track.id}>
        <div>
          <img onClick= {this.playAudio} className='track-item-pic' src={this.props.track.image_url}/>
          <audio src={audio} ref={(elm) =>{this.audioTag = elm}}></audio>
        </div>
      </li>
    );
  }
}

export default TrackItem;
