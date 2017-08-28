import { RECEIVE_SINGLE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_USER:
      action.user.tracks = Object.keys(action.user.tracks);
      return {[action.user.id]: action.user};
    default:
      return state;
  }
};

export default usersReducer;
