import * as APIUtil from '../util/search_util';

export const RECEVIE_SEARCH_RESULT = 'RECEVIE_SEARCH_RESULT';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveSearchResult = (result) => {
  return{
    type: RECEVIE_SEARCH_RESULT,
    result
  };
};

export const clearSearch = () => {
  return{
    type: CLEAR_SEARCH
  };
};

export const fetchSearch = (query) => (dispatch) =>{
  return( APIUtil.fetchSearch(query)
    .then(result => dispatch(receiveSearchResult(result)))
  );
};
