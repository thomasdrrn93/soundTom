export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

export const receiveCurrrentTrack = (track) =>{
  return{
    type: RECEIVE_CURRENT_TRACK,
    track
  };
};
