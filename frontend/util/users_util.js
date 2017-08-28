export const fetchSingleUser = (user) =>{
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}`
  });
};
