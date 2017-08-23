class Certification < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
