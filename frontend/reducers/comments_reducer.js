import { RECEIVE_SINGLE_COMMENT, RECEIVE_ALL_COMMENTS,
  DELETE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_SINGLE_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      return Object.assign({}, state, newComment);
    case DELETE_COMMENT:
      const newState = Object.assign({}, state);
      const deletedComment = action.comment.id;
      delete newState[deletedComment];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
