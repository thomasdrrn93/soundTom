import { connect } from 'react-redux';
import Stream from './stream';
import { fetchAllTracks } from '../../actions/track_actions';
import { tracksArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const tracks = tracksArray(state);
  return {
    tracks
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps,mapDispatchToProps)(Stream);
