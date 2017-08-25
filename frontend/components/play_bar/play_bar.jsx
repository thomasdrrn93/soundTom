import React from 'react';

class PlayBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if (this.props.currentSong){
      return(
      <div className='play-bar'></div>
      );
    } else{
        return(
          <div></div>
      );
    }
  }
}
export default PlayBar;
