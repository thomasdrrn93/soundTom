class Track < ApplicationRecord
  validates :uploader_id, :name, :audio, presence: true

  has_attached_file :image, default_url: "no_cover.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
end
