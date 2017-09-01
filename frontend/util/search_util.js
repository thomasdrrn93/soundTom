export const fetchSearch = (query) => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracks/search/${query}`,
  });
};
