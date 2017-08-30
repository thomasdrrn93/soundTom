commenter = User.find(comment.commenter_id)
json.id comment.id
json.track_id comment.track_id
json.commenter_id comment.commenter_id
json.commenter_pic asset_path(commenter.profile_pic)
json.commenter commenter.username
json.body comment.body
