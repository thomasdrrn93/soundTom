export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const UPDATE_POS = 'UPDATE_POS';

export const receiveCurrrentTrack = (track, status, queue, pos) =>{
  return{
    type: RECEIVE_CURRENT_TRACK,
    track,
    status,
    queue
  };
};

export const receiveQueue = (queue) => {
  return{
  type: RECEIVE_QUEUE,
  queue
  };
};

export const updatePos = (pos) => {
  return{
    type: UPDATE_POS,
    pos
  };
};
