import { RECEIVE_SINGLE_TRACK, RECEIVE_ALL_TRACKS,
  RECEIVE_ERRORS, DELETE_TRACK} from '../actions/track_actions';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';


const tracksReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_TRACK:
      const newTrack = {[action.track.id]: action.track};
      return Object.assign({}, state, newTrack);
    case RECEIVE_ALL_TRACKS:
      return action.tracks;
    case RECEIVE_SINGLE_USER:
      const newTracks = action.user.tracks;
      return Object.assign({}, state, newTracks);
    case DELETE_TRACK:
      const newState = Object.assign({}, state);
      const deletedTrack = action.track.id;
      delete newState[deletedTrack];
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
