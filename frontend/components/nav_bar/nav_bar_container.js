import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchSearch } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';
import { searchResults } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return{
    currentUser: state.session.currentUser,
    search: searchResults(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(logout()),
    fetchSearch: (query) => dispatch(fetchSearch(query))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
