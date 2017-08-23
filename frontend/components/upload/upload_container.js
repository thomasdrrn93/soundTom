import { connect } from 'react-redux';
import Upload from './upload';
import { createNewTrack} from '../../actions/track_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    createNewTrack: (track) => dispatch(createNewTrack(track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
