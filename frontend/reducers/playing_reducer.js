import { RECEIVE_CURRENT_TRACK } from '../actions/play_bar_actions';

const playingReducer = (state = { currentSong: null, status: '', queue: []}, action) => {
  Object.freeze();
  switch(action.type){
    case RECEIVE_CURRENT_TRACK:
    const newState = Object.assign({}, state);
    newState.currentSong = action.track;
    newState.status = action.status;
    newState.queue = action.queue;
      return newState;
    default:
      return state;
  }
};

export default playingReducer;
