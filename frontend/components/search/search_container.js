import { connect } from 'react-redux';
import Search from './search';
import { fetchSearch } from '../../actions/search_actions';
import { searchTracks } from '../../reducers/selectors';

const mapStateToProps = (state) =>{
  return{
    tracks: searchTracks(state)
  };
};


export default connect(mapStateToProps)(Search);
