class User < ApplicationRecord
  validates :name, :password_digest, :session_token, :email, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 12 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token

    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end

    self.session_token
  end
end
