import { RECEVIE_SEARCH_RESULT, CLEAR_SEARCH} from '../actions/search_actions';

const searchReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEVIE_SEARCH_RESULT:
      return action.result;
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
