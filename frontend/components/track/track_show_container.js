import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchOneTrack } from '../../actions/track_actions';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';
import { withRouter} from 'react-router-dom';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.id];
  return {
    track: track || {},
    currentSong: state.playing.currentSong,
    status: state.playing.status,
    currentUser: state.session.currentUser || {}
  };
};

const mapDispatchToProps = dispatch => ({
  fetchOneTrack: (id) => dispatch(fetchOneTrack(id)),
  receiveCurrrentTrack: (track, status) =>
    dispatch(receiveCurrrentTrack(track, status)),
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
