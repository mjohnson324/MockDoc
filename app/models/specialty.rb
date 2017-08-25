# == Schema Information
#
# Table name: specialties
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Specialty < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :doctor_specialties
  has_many :doctors, through: :doctor_specialties, source: :doctor
end
