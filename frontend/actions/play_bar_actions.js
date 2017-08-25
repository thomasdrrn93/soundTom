export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const STOP_CURRENT_TRACK = 'STOP_CURRENT_TRACK';

export const receiveCurrrentTrack = (track, status) =>{
  return{
    type: RECEIVE_CURRENT_TRACK,
    track,
    status
  };
};

export const stopCurrentTrack = (track, status) =>{
  return{
    type: STOP_CURRENT_TRACK,
    track,
    status
  };
};
