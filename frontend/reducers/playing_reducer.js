import { RECEIVE_CURRENT_TRACK } from '../actions/play_bar_actions';

const playingReducer = (state = { currentSong: null, status: ''}, action) => {
  Object.freeze();
  switch(action.type){
    case RECEIVE_CURRENT_TRACK:
    const newState = Object.assign({}, state);
    newState.currentSong = action.track;
    newState.status = action.status;
      return newState;
    default:
      return state;
  }
};

export default playingReducer;
