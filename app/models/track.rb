class Track < ApplicationRecord
  validates :uploader_id, :name, :user, :audio, presence: true

  has_attached_file :image, default_url: "no_cover.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/

  has_many :peaks,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Peak

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Comment

  has_many :likes

  has_many :like_users,
    through: :likes,
    source: :user
end
