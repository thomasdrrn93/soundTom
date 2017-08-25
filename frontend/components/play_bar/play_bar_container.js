import PlayBar from './play_bar';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    currentSong: state.playing.currentSong,
    status: state.playing.status
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    receiveCurrrentTrack: (track, status) => dispatch(receiveCurrrentTrack(track, status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);
