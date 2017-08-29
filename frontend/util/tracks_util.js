export const fetchAllTracks = () => {
  return $.ajax ({
    method: "Get",
    url: '/api/tracks'
  });
};

export const fetchOneTrack = (track) => {
  return $.ajax ({
    method: "Get",
    url: `/api/tracks/${track.id}`
  });
};

export const createTrack = (track) => {
  return $.ajax ({
    method: "POST",
    url: `/api/tracks/`,
    data: track,
    processData: false,
    contentType: false
  });
};

export const updateTrack = (track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`
  });
};

export const destroyTrack = (track) => {
  debugger;
  return $.ajax({
    method: "DELETE",
    url: `api/tracks/${track.id}`
  });
};
