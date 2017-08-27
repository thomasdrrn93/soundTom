import React from 'react';

class PlayBar extends React.Component{
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.currentValue = this.currentValue.bind(this);
    this.trackLength = this.trackLength.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }


  componentDidUpdate(){
    if (this.props.currentSong){
    this.props.status === 'play' ? this.playAudio() : this.pauseAudio();
    }
  }


  playAudio(){
    this.audioTag.play();
    setInterval(() => this.updateTime(), 200);
  }

  pauseAudio(){
    this.audioTag.pause();
  }

  trackLength(length){
    const duration = length;
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration - minutes * 60);
    minutes = minutes.toString();
    seconds = seconds.toString();
    return minutes + ":" + seconds;
  }

  currentValue(value){
    const total = value;
    let minutes = Math.floor( total / 60);
    let seconds = Math.floor( total - minutes * 60);
    minutes = minutes.toString();
    seconds = seconds.toString();
    return minutes + ":" + seconds;
  }

  updateTime(){
    const audio = this.audioTag;
    const progress = this.prog;
    const length = this.trackLength(audio.duration);
    const currentTime = this.currentValue(audio.currentTime);

    progress.value = (audio.currentTime / audio.duration);
    progress.addEventListener('click', change);

     this.changeButton.style.left = `${progress.value * 100}%`;

    function change(e){
      const percent = e.offsetX / this.offsetWidth;
      audio.currentTime = percent * audio.duration;
      progress.value = percent / 100;
    }
  }


  render(){
    if (this.props.currentSong){
      const audio = this.props.currentSong.audio;
      const player = <audio src={audio}
        ref={(elm) => {this.audioTag = elm;}}></audio>;
      return(
      <div className='play-bar'>
        {player}
        <div className='progress-container'>
          <progress id='progress' value='0' max='1'
            ref = {(elm) => {this.prog = elm;}} >
          </progress>
          <div id='change-button'
            ref = {(elm) => {this.changeButton = elm;}}></div>
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
