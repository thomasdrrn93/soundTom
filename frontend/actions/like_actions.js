import * as APIUtil from '../util/likes_util';

export const RECEVIE_LIKE = 'recevieLike';

export const recevieLike = (like) =>{
  return{
    type: RECEVIE_LIKE,
    like
  };
};

export const createLike = (like) => (dispatch) =>{
  return APIUtil.createLike(like).then(like=> dispatch(recevieLike(like)));
};

export const deleteLike = (like) => (dispatch) =>{
  return APIUtil.deleteLike(like).then(like => dispatch(recevieLike(like)));
};
