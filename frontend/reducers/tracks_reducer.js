import { RECEIVE_SINGLE_TRACK, RECEIVE_ALL_TRACKS, RECEIVE_ERRORS } from '../actions/track_actions';


const tracksReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_TRACK:
      const newTrack = {[action.track.id]: action.track};
      return Object.assign({}, state, newTrack);
    case RECEIVE_ALL_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
