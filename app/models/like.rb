class Like  < ApplicationRecord
  validates :user_id, uniqueness: {scope: :track_id }

  belongs_to :track
  belongs_to :user
end
