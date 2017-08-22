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
    data: track
  });
};

export const updateTrack = (track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`
  });
};
