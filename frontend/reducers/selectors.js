export const tracksArray = (state) =>{
  const tracks = state.entities.tracks;
  return (
    Object.keys(tracks).map(key => tracks[key])
  );
};

export const userTracks = (state, user) => {
  const tracks = state.entities.tracks;
  return (
    user.tracks.map(key => tracks[key])
  );
};
