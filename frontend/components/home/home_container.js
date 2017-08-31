import { connect } from 'react-redux';
import Home from './home';
import { signup, login, logout } from '../../actions/session_actions';
import { homeTracks } from '../../reducers/selectors';
import { fetchAllTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => {
  return{
    currentUser: state.session.currentUser,
    tracks: homeTracks(state) || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    fetchAllTracks: () => dispatch(fetchAllTracks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
