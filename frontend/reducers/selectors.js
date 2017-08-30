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

export const commentsArray = (state) =>{
  const comments = state.entities.comments;
  const arr =Object.keys(comments).map(key => comments[key]);
  return(
    arr.reverse()
  );
};
