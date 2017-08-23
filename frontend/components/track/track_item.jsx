import React from 'react';

class TrackItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <div>
          <img className='track-item-album' src={this.props.track.image_url}/>
          <div></div>
        </div>
      </li>
    );
  }
}

export default TrackItem;
