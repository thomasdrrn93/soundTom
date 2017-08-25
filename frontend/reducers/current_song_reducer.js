import { RECEIVE_CURRENT_TRACK } from '../actions/play_bar_actions';

const currentSongReducer = (state = null, action) => {
  Object.freeze();
  switch(action.type){
    case RECEIVE_CURRENT_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default currentSongReducer;
