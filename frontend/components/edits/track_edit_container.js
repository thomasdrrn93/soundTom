import { connect } from 'react-redux';
import TrackEdit from './track_edit';
import { updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state) => {
  return{
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    updateTrack: (track, id) => dispatch(updateTrack(track, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackEdit);
