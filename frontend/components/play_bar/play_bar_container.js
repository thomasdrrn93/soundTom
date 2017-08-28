import PlayBar from './play_bar';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    currentSong: state.playing.currentSong,
    status: state.playing.status,
    queue: state.playing.queue
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    receiveCurrrentTrack: (track, status, queue) =>
      dispatch(receiveCurrrentTrack(track, status, queue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);
