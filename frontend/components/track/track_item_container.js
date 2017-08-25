import { connect } from 'react-redux';
import TrackItem from './track_item';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';

const mapStateToProps = (state) => {
  return{
    currentSong: state.currentSong
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrrentTrack: (track) => dispatch(receiveCurrrentTrack(track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);
