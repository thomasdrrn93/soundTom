import React from 'react';
import { Link } from 'react-router-dom';
import UploadModal from '../modals/upload_modal';

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault;
    this.props.logout();
  }

  render(){
    return(
      <div className='nav-bar'>
        <div id='left-nav'>
          <a href="/#/stream" className='nav-links'>
            <div id='nav-home'>Home</div>
          </a>
        </div>
        <div id='right-nav'>
          <UploadModal />
          <a href= {`/#/users/${this.props.currentUser.id}`} className='nav-links'>
            <div>{this.props.currentUser.username}</div>
          </a>
          <button onClick={this.handleLogout} id='logout-nav'>Log Out</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
// <p>{this.props.currentUser.username}</p>
// <button onClick={this.handleLogout}>Log Out</button>
