class Comment < ApplicationRecord
  validates :track_id, :commenter_id, :body, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track
end
