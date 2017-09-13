import { connect } from 'react-redux';
import TrackItem from './track_item';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';
import { destroyTrack, getTrackWaves } from '../../actions/track_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return{
    currentSong: state.playing.currentSong || [],
    status: state.playing.status,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrrentTrack: (track, status, queue) =>
      dispatch(receiveCurrrentTrack(track, status, queue)),
    deleteTrack: (track) => dispatch(destroyTrack(track)),
    updateTrack: (track) => dispatch(getTrackWaves(track)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);
