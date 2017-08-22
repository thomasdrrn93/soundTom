class Track < ApplicationRecord
  validates :uploader_id, :name, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
end
