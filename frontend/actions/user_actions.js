import * as APIUtil from '../util/users_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveSingleUser = (user) => {
  return{
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const fetchOneUser = (user) => (dispatch) =>{
  return APIUtil.fetchSingleUser(user)
    .then(user => dispatch(receiveSingleUser(user)));
};
