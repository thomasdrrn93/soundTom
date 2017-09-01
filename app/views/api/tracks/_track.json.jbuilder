waves = track.waves || ''
json.name track.name
json.genre track.genre
json.uploader_id track.uploader_id
json.image asset_path(track.image.url)
json.audio asset_path(track.audio.url)
json.user_pic asset_path(User.find(track.uploader_id).profile_pic)
json.comments track.comments.ids
json.user track.user.username
json.created time_ago_in_words(track.created_at)
json.waves waves.split(',')
json.id track.id
