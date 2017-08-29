import { connect } from 'react-redux';
import TrackEdit from './track_edit';
import { updateTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackEdit));
