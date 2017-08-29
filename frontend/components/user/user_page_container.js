import { connect } from 'react-redux';
import UserPage from './user_page';
import { userTracks } from '../../reducers/selectors';
import { fetchOneUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const tracks = user ? userTracks(state, user) : [];
  return{
    user,
    tracks
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    fetchOneUser: (user) => dispatch(fetchOneUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
