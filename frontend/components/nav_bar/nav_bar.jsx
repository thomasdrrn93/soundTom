import React from 'react';

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
          <a href ="/#/upload" className='nav-links'>
            <div>Upload</div>
          </a>
          <a href="/#/stream" className='nav-links'>
            <div>{this.props.currentUser.username}</div>
          </a>
          <button onClick={this.handleLogout} id='logout-nav'>Log Out</button>
        </div>
      </div>
    );
  }
}
// <p>{this.props.currentUser.username}</p>
// <button onClick={this.handleLogout}>Log Out</button>

export default NavBar;
