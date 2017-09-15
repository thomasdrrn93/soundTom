import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchOneTrack, getTrackWaves } from '../../actions/track_actions';
import { receiveCurrrentTrack, updatePos } from
  '../../actions/play_bar_actions';
import { withRouter} from 'react-router-dom';
import { createComment } from '../../actions/comment_actions';
import { commentsArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.id] || {};
  const comments = track.comments || [];
  return {
    track: track,
    currentSong: state.playing.currentSong || [],
    status: state.playing.status,
    currentUser: state.session.currentUser || {},
    comments: commentsArray(state).length,
    pos: state.playing.pos
  };
};

const mapDispatchToProps = dispatch => ({
  fetchOneTrack: (id) => dispatch(fetchOneTrack(id)),
  receiveCurrrentTrack: (track, status) =>
    dispatch(receiveCurrrentTrack(track, status)),
  createComment: (comment) => dispatch(createComment(comment)),
  getTrackWaves: (track) => dispatch(getTrackWaves),
  updatePos: (pos) => dispatch(pos)
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
