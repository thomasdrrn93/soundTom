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

export const updateTrack = (track, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${id}`,
    data: track,
    processData: false,
    contentType: false
  });
};

export const destroyTrack = (track) => {
  return $.ajax({
    method: "DELETE",
    url: `api/tracks/${track.id}`
  });
};
