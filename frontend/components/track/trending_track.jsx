import React from 'react';

class TrendingTrack extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay(){
    this.props.receiveCurrrentTrack(this.props.track, 'play');
  }

  handlePause(){
    this.props.receiveCurrrentTrack(this.props.track, 'pause');
  }
  render(){
    const playB = this.props.currentSong && this.props.track &&
    this.props.currentSong.id === this.props.track.id &&
    this.props.status === 'play' ?
    <div className='circle-large' onClick={this.handlePause}>
      <div className="circle-inner-large-pause-left"></div>
      <div className="circle-inner-large-pause-right"></div>
    </div>: <div className="circle-large" onClick={this.handlePlay}>
      <div className="circle-inner"></div>
    </div>;
    return(
      <li className="trending-track" >
        <div id='' style={{padding: '1px'}}
          onMouseLeave={ () => this.setState({ buttonVisible: false })}>
          { this.state.buttonVisible ? playB : null }
          <img className="trending-track-art" src={this.props.track.image} alt=""
            onMouseEnter={ () => this.setState({ buttonVisible: true })}
            />
          <div className="trending-track-title">
            {this.props.track.name}
          </div>
          <div className="trending-track-artist">
            {this.props.track.user}
          </div>
        </div>
      </li>
    );
  }
}

export default TrendingTrack;
