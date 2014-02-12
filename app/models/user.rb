# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string(255)      not null
#  password_digest    :string(255)      not null
#  authenticity_token :string(255)      not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :username, :password
  attr_reader :password

  validates :username, :authenticity_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user

    user.has_password?(password) ? user : nil
  end

  def password=(secret)
    @password = secret
    self.password_digest = BCrypt::Password.create(secret)
  end

  def has_password?(secret)
    BCrypt::Password.new(self.password_digest).is_password?(secret)
  end

  def reset_token!
    self.authenticity_token = SecureRandom::urlsafe_base64(16)
    self.save!

    self.authenticity_token
  end

  def ensure_token
    self.reset_token! unless self.authenticity_token
  end
end
