
json.id user.id
json.username user.username
json.location user.location
json.profile_pic asset_path(user.profile_pic.url)
json.cover_pic asset_path(user.cover_pic.url)
json.comments user.comments.ids
json.liked_tracks user.liked_tracks.pluck(:track_id)
json.set! 'tracks' do
  user.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track.json.jbuilder', track: track
    end
  end
end
