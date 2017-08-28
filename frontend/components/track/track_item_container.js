import { connect } from 'react-redux';
import TrackItem from './track_item';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';

const mapStateToProps = (state) => {
  return{
    currentSong: state.playing.currentSong,
    status: state.playing.status,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrrentTrack: (track, status, queue) =>
      dispatch(receiveCurrrentTrack(track, status, queue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);
