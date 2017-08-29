import * as APIUtil from '../util/comments_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const removeComment = (comment) => {
  return{
    type: DELETE_COMMENT,
    comment
  };
};

export const receiveSingleComment = (comment) => {
  return{
    type: RECEIVE_SINGLE_COMMENT,
    comment
  };
};

export const receiveErrors = (errors) => {
  return{
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const receiveAllComments = (comments) => {
  return{
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

export const destroyComment = (comment) => (dispatch) =>{
  return( APIUtil.deleteComment(comment)
    .then(comment => dispatch(removeComment(comment)))
  );
};

export const createComment = (comment) => (dispatch) =>{
  return APIUtil.createComment(comment)
    .then(comment => dispatch(receiveSingleComment(comment)),
  err => (dispatch(receiveErrors(err.responseJSON))));
};

export const updateComment = (comment) => (dispatch) =>{
  return APIUtil.updateComment(comment)
    .then(comment => dispatch(receiveSingleComment(comment)),
  err => (dispatch(receiveErrors(err.responseJSON))));
};

export const fetchAllComments = (id) => (dispatch) =>{
  return APIUtil.fetchAllComments(id)
    .then(comments => dispatch(receiveAllComments(comments)));
};
