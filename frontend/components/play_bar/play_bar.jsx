import React from 'react';

class PlayBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentTime: '00:00',
      duration: '00:00'
    };

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.currentValue = this.currentValue.bind(this);
    this.trackLength = this.trackLength.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    this.audioTag.addEventListener('ended', () => {debugger; this.handleNext();});

  }


  componentDidUpdate(){
    if (this.props.currentSong){
      this.props.status === 'play' ? this.playAudio() : this.pauseAudio();
    }
  }


  playAudio(){
    this.audioTag.play();
    setInterval(() => this.interval(), 200);
  }

  interval(){
    if (this.audioTag.duration.toString() !== 'NaN'){
      this.updateTime();
    } else{

    }
  }

  pauseAudio(){
    this.audioTag.pause();
  }

  handlePlay(){
    this.props.receiveCurrrentTrack(this.props.currentSong, 'play');
  }

  handlePause(){
    this.props.receiveCurrrentTrack(this.props.currentSong, 'pause');
  }

  handlePrev(){
    const queue = this.props.queue;
    const prev = queue[queue.length - 2];
    const next = queue[queue.length - 1];
    const end = queue.slice(0, queue.length -1);
    this.props.receiveCurrrentTrack(prev, 'play',
      [next].concat(end));
  }

  handleNext(){
    const queue = this.props.queue;
    const next = queue[0];
    this.props.receiveCurrrentTrack(next, 'play',
      queue.slice(1,queue.length).concat(next));

  }

  trackLength(length){
    const duration = length;
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration - minutes * 60);
    const mins = minutes > 9 ? minutes.toString() : '0' + minutes.toString();
    const secs = seconds > 9 ? seconds.toString() : '0' + seconds.toString();
    return mins + ":" + secs;
  }

  currentValue(value){
    const total = value;
    let minutes = Math.floor( total / 60);
    let seconds = Math.floor( total - minutes * 60);
    const mins = minutes > 9 ? minutes.toString() : '0' + minutes.toString();
    const secs = seconds > 9 ? seconds.toString() : '0' + seconds.toString();
    return mins + ":" + secs;
  }

  updateTime(){
    const audio = this.audioTag;
    const progress = this.prog;
    const length = this.trackLength(audio.duration);
    const currentTime = this.currentValue(audio.currentTime);
    this.setState({currentTime: currentTime, duration: length});

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

    let audio = null;
    if (this.props.currentSong){
      audio = this.props.currentSong.audio;
      // const player = <audio src={audio} preload="metadata"
      //   ref={(elm) => {this.audioTag = elm;}}>
      // </audio>;

      let currentTime;
      const songCover = this.props.currentSong.image;
      const title = this.props.currentSong.name;
      if (this.state.currentTime){
        currentTime = this.state.currentTime;
      } else{
        currentTime = '00:00';
      }
      let duration;
      if (this.state.duration === '0NaN:0NaN' || null){
        duration = '--:--';
      } else{
        duration = this.state.duration;
      }

      const playButton = <img
        src='https://a-v2.sndcdn.com/assets/images/playback/play-91b117d.svg'
        onClick={this.handlePlay} className='player-button'/>;
      const pauseButton = <img
        src='https://a-v2.sndcdn.com/assets/images/playback/pause-b36fad6.svg'
        onClick={this.handlePause} className='player-button'/>;
      const prevButton = <img
        src='https://a-v2.sndcdn.com/assets/images/playback/prev-05b62ec.svg'
        onClick={this.handlePrev} className='player-button' />;
      const nextButton = <img
        src='https://a-v2.sndcdn.com/assets/images/playback/skip-9b481fb.svg'
        onClick={this.handleNext} className='player-button' />;
    return(
      <div className='play-bar'>
        <audio src={audio} preload="metadata"
          ref={(elm) => {this.audioTag = elm;}}
        >
        </audio>
        <div id='player-buttons'>
          {prevButton}
          {this.props.status === 'play' ? pauseButton : playButton}
          {nextButton}
        </div>
        <div id='progress-time'>
          <small id='current-time'>{currentTime}</small>
          <div className='progress-container'>
            <progress id='progress' value='0' max='1'
              ref = {(elm) => {this.prog = elm;}} >
            </progress>
            <div className='change-button'
              ref = {(elm) => {this.changeButton = elm;}}></div>
          </div>
          <small id='duration'>{duration}</small>
        </div>
        <div className = 'play-bar-info'>
          <img className='play-bar-image' src={songCover} />
          <div className ='play-bar-artist-title'>
            <div className='play-bar-artist'>Artist</div>
            <div className='play-bar-title'>{title}</div>
          </div>
        </div>
      </div>
      );
    } else{
        return(
          <div style={{display: 'none'}}>
            <audio src={audio} preload="metadata"
              ref={(elm) => {this.audioTag = elm;}}
            >
            </audio>
          </div>
      );
    }
  }
}
export default PlayBar;


// $('main').append("<audio src='http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/040/original/Dance-Yrself-Clean.mp3?1503499163'></audio>")
