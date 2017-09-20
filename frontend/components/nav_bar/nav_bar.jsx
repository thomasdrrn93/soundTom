import React from 'react';
import { Link } from 'react-router-dom';
import UploadModalContainer from '../modals/upload_modal_container';
import SingleSearchItem from '../search/single_search_item';

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ''
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      search: e.currentTarget.value
    });
    if (e.currentTarget.value === ''){
      this.props.clearSearch();
    } else {
      this.props.fetchSearch(e.currentTarget.value);
    }
  }


  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  handleSearchSubmit(e){
    e.preventDefault();
    this.props.fetchSearch(this.state.search);
  }

  handleSearchClick(e){
    e.preventDefault();
    this.setState({search: ''});
    this.props.clearSearch();
  }

  handleBlur(e){
    e.preventDefault();
    e.currentTarget.value = '';
    setTimeout(this.props.clearSearch, 350);
  }

  render(){
    const searchResults =
      this.props.search.length > 0 ?
        <ul className='search-results' onClick={this.handleSearchClick}>
          {this.props.search.map(result => <SingleSearchItem key={result.id}
            result={result} />)}
        </ul> : <div></div>;
    return(
      <div className='nav-bar'>
        <div id='left-nav'>
          <a href="/#/stream" className='nav-links'>
            <div id='nav-home'>Home</div>
          </a>
        </div>
        <div id='center-nav'>
          <form onSubmit={this.handleSearchSubmit} autoComplete="off">
            <input type='text' placeholder='Search' id='nav-search'
              autoComplete="off"
              onChange={this.handleChange} onBlur={this.handleBlur} />
          </form>
          {searchResults}
        </div>
        <div id='right-nav'>
          <UploadModalContainer />
          <a href= {`/#/users/${this.props.currentUser.id}`}
            className='nav-links'>
            <div id='nav-username'>
              <img className='nav-pic'
                src={this.props.currentUser.profile_pic} />
              {this.props.currentUser.username}
            </div>
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
