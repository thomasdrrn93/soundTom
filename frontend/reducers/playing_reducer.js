import { RECEIVE_CURRENT_TRACK, UPDATE_POS } from '../actions/play_bar_actions';

const playingReducer = (state =
  { currentSong: null, status: '', queue: [], pos: 0 }, action) => {
  Object.freeze();
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_TRACK:
    newState = Object.assign({}, state);
    newState.currentSong = action.track;
    newState.status = action.status;
    newState.queue = action.queue;
    newState.pos = action.pos;
      return newState;
    case UPDATE_POS:
    newState = Object.assign({}, state);
    newState.pos = action.pos;
    return newState;
    default:
      return state;
  }
};

export default playingReducer;
