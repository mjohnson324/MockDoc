# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, :session_token, :email, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 12 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :appointments,
    class_name: :Appointment,
    primary_key: :id,
    foreign_key: :patient_id

  has_many :reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :patient_id,
    dependent: :destroy

  has_many :doctors, through: :appointments, source: :doctor

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.valid_password?(password)
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
