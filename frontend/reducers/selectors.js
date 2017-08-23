export const tracksArray = (state) =>{
  const tracks = state.entities.tracks;
  return (
    Object.keys(tracks).map(key => tracks[key])
  );
};
