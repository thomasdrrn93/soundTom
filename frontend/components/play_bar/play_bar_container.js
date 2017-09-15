import PlayBar from './play_bar';
import { receiveCurrrentTrack, updatePos } from
  '../../actions/play_bar_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    currentSong: state.playing.currentSong,
    status: state.playing.status,
    queue: state.playing.queue,
    pos: state.playing.pos
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    receiveCurrrentTrack: (track, status, queue) =>
      dispatch(receiveCurrrentTrack(track, status, queue)),
    updatePos: (pos) => dispatch(updatePos(pos))  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);
