import React from 'react';

class PlayBar extends React.Component{
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }


  componentDidUpdate(){
    if (this.props.currentSong){
    this.props.status === 'play' ? this.playAudio() : this.pauseAudio();
    }
  }

  playAudio(){
    this.audioTag.volume = 0;
    this.audioTag.play();
  }

  pauseAudio(){
    debugger;
    this.audioTag.pause();
  }

  trackLenght(){
    const duration = this.audioTag.duration;
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration - minutes * 60);
    minutes = minutes.toString();
    seconds = seconds.toString();
    return minutes + ":" + seconds;
  }


  render(){
    if (this.props.currentSong){
      const audio = this.props.currentSong.audio;
      return(
      <div className='play-bar'>
        <audio src={audio} ref={(elm) => {this.audioTag = elm}}></audio>
        <div className='progress'>
          <div className= 'progress-line'>

          </div>
        </div>
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
