import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actons/session_actions';

const defaulState = {currentUser: null, errors: []};

const sessionReducer = (state = defaulState, action) => {
  Object.frezze();
  let newState;
  switch(action.type){
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state);
      newState.errors = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;