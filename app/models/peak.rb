class Peak < ApplicationRecord
  validates :track_id, :peak, presence: true

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track
end
