import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import EditTrackModal from './edit_track_modal';

const mapStateToProps = (state) =>{
  return{
    tracks: state.entities.tracks
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackModal);
