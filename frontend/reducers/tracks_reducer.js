import { RECEIVE_SINGLE_TRACK, RECEIVE_ALL_TRACKS } from '../actions/tracks_actions';

const tracksReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_TRACK:
      const newTrack = {[action.track.id]: action.track};
      return Object.assign({}, state, action.track);
    case RECEIVE_ALL_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
