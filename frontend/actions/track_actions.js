import * as APIUtil from '../util/tracks_util';

export const RECEIVE_SINGLE_TRACK = 'RECEIVE_SINGLE_TRACK';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const DELETE_TRACK = 'DELETE_TRACK';

export const removeTrack = (track) => {
  return{
    type: DELETE_TRACK,
    track
  };
};

export const receiveSingleTrack = (track) => {
  return{
    type: RECEIVE_SINGLE_TRACK,
    track
  };
};

export const receiveErrors = (errors) => {
  return{
    type: RECEIVE_TRACK_ERRORS,
    errors
  };
};

export const receiveAllTracks = (tracks) => {
  return{
    type: RECEIVE_ALL_TRACKS,
    tracks
  };
};

export const destroyTrack = (track) => (dispatch) =>{
  return APIUtil.destroyTrack(track).then(track => dispatch(removeTrack(track)));
};

export const createNewTrack = (track) => (dispatch) =>{
  return APIUtil.createTrack(track)
    .then(track => dispatch(receiveSingleTrack(track)),
  err => (dispatch(receiveErrors(err.responseJSON))));
};

export const updateTrack = (track, id) => (dispatch) =>{
  debugger;
  return APIUtil.updateTrack(track, id)
    .then(track => dispatch(receiveSingleTrack(track)),
  err => (dispatch(receiveErrors(err.responseJSON))));
};

export const fetchOneTrack = (track) => (dispatch) =>{
  return APIUtil.fetchOneTrack(track)
    .then(track => dispatch(receiveSingleTrack(track)));
};

export const fetchAllTracks = () => (dispatch) =>{
  return APIUtil.fetchAllTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)));
};

export const getTrackWaves = (track) => (dispatch) =>{
  return APIUtil.getTrackWaves(track)
    .then(track => dispatch(receiveSingleTrack(track)));
};
