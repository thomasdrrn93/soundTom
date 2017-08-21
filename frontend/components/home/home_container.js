import { connect } from 'react-redux';
import Home from './home';
import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return{
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
