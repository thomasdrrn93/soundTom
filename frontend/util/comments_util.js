export const fetchAllComments = (trackId) => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${trackId}/comments`
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/tracks/${comment.track_id}/comments`,
    data: comment
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: "PATCH",
    url: `api/comments/${comment.id}`,
    data: comment
  });
};

export const deleteComment = (comment) => {
  debugger;
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${comment.id}`
  });
};
