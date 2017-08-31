import { connect } from 'react-redux';
import TrendingTrack from './trending_track';
import { receiveCurrrentTrack } from '../../actions/play_bar_actions';

const mapStateToProps = (state) =>{
  return{
    currentSong: state.playing.currentSong,
    status: state.playing.status
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    receiveCurrrentTrack: (track, status, queue) =>
      dispatch(receiveCurrrentTrack(track, status, queue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (TrendingTrack);
