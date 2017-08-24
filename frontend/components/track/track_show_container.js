import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchOneTrack } from '../../actions/track_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.id];
  return {
    track
  };
};

const mapDispatchToProps = dispatch => ({
  fetchOneTrack: (id) => dispatch(fetchOneTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
