import * as APIUtil from '../util/search_util';

export const RECEVIE_SEARCH_RESULT = 'RECEVIE_SEARCH_RESULT';

export const receiveSearchResult = (tracks) => {
  return{
    type: RECEVIE_SEARCH_RESULT,
    tracks
  };
};

export const fetchSearch = (query) => (dispatch) =>{
  return( APIUtil.fetchSearch(query)
    .then(tracks => dispatch(receiveSearchResult(tracks)))
  );
};
