import React from 'react';

class PlayBar extends React.Component{
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  playAudio(){
    this.audioTag.play();
  }

  pauseAudio(){
    debugger;
    this.audioTag.pause();
  }


  render(){
    if (this.props.currentSong){
      const audio = this.props.currentSong.audio;
      return(
      <div className='play-bar'>
        <audio src={audio} ref={(elm) => {this.audioTag = elm}}></audio>
        {this.props.status === 'play' ? this.playAudio() : this.pauseAudio()}
      </div>
      );
    } else{
        return(
          <div></div>
      );
    }
  }
}
export default PlayBar;
