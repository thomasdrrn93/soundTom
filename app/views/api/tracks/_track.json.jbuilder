json.name track.name
json.genre track.genre
json.uploader_id track.uploader_id
json.image asset_path(track.image.url)
json.audio asset_path(track.audio.url)
json.comments track.comments.ids
json.user track.user.username
json.id track.id
