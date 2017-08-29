export const fetchSingleUser = (user) =>{
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}`
  });
};

export const updateUser = (user, id) =>{
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: user,
    processData: false,
    contentType: false
  });
};
