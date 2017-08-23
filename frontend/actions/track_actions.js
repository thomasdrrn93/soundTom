import * as APIUtil from '../util/tracks_util';

export const RECEIVE_SINGLE_TRACK = 'RECEIVE_SINGLE_TRACK';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';

export const receiveSingleTrack = (track) => {
  return{
    type: RECEIVE_SINGLE_TRACK,
    track
  };
};

export const receiveAllTracks = (tracks) => {
  return{
    type: RECEIVE_ALL_TRACKS,
    tracks
  };
};

export const createNewTrack = (track) => (dispatch) =>{
  return APIUtil.createTrack(track)
    .then(track => dispatch(receiveSingleTrack(track)));
};

export const updateTrack = (track) => (dispatch) =>{
  return APIUtil.updateTrack(track)
    .then(track => dispatch(receiveSingleTrack(track)));
};

export const fetchOneTrack = (track) => (dispatch) =>{
  return APIUtil.fetchOneTrack(track)
    .then(track => dispatch(receiveSingleTrack(track)));
};

export const fetchAllTracks = () => (dispatch) =>{
  return APIUtil.fetchAllTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)));
};