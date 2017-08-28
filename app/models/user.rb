class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_attached_file :profile_pic, default_url: "default.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\z/

  has_attached_file :cover_pic, default_url: "cover.jpg"
  validates_attachment_content_type :cover_pic, content_type: /\Aimage\/.*\z/

  has_many :tracks,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Track

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
