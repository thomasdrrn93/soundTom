import { RECEVIE_SEARCH_RESULT} from '../actions/search_actions';

const searchReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEVIE_SEARCH_RESULT:
      return action.result;
    default:
      return state;
  }
};

export default searchReducer;
