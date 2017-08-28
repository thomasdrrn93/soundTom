import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchOneTrack } from '../../actions/track_actions';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.id];
  return {
    track,
    currentSong: state.playing.currentSong,
    status: state.playing.status
  };
};

const mapDispatchToProps = dispatch => ({
  fetchOneTrack: (id) => dispatch(fetchOneTrack(id)),
  receiveCurrrentTrack: (track, status) =>
    dispatch(receiveCurrrentTrack(track, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
