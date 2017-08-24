import { connect } from 'react-redux';
import Upload from './upload';
import { createNewTrack} from '../../actions/track_actions';

const mapStateToProps = (state) => {
  var keys = Object.keys(state.entities.tracks);
  const key = keys[keys.length - 1];
  const newTrack = state.entities.tracks[key];
  return {
    currentUser: state.session.currentUser,
    newTrack,
    errors: state.errors || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    createNewTrack: (track) => dispatch(createNewTrack(track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
