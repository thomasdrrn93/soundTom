import {  RECEIVE_TRACK_ERRORS } from '../actions/track_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const errorsReducer = ( state = [], action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
