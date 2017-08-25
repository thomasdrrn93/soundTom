import PlayBar from './play_bar';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    currentSong: state.currentSong
  };
};

export default connect(mapStateToProps)(PlayBar);
