class Track < ApplicationRecord
  validates :uploader_id, :name, presence: true

  has_attached_file :image, default_url: "no_cover.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :audio
  validates_attachment_content_type :audio,
  content_type: [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3',
    'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg',
    'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
end
