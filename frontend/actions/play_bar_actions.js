export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';

export const receiveCurrrentTrack = (track, status, queue) =>{
  return{
    type: RECEIVE_CURRENT_TRACK,
    track,
    status,
    queue
  };
};

export const recevieQueue = (queue) => {
  return{
  type: RECEIVE_QUEUE,
  queue  
  };
};
