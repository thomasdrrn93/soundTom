import React from 'react';
import { Link } from 'react-router-dom';

class SingleSearchItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const result = this.props.result;
    return(
      <Link to= {result.username ? `/users/${result.id}`
        : `/tracks/${result.id}`}>
        <li className='single-search-result'>
          <img className='nav-pic'
            src={result.image ? result.image : result.profile_pic} />
          <div>{result.name ? result.name : result.username}</div>
        </li>
      </Link>
    );
  }
}

export default SingleSearchItem;
