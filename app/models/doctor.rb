# == Schema Information
#
# Table name: doctors
#
#  id         :bigint(8)        not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  education  :text
#  degree     :string
#  quote      :text
#  lat        :float
#  lng        :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Doctor < ApplicationRecord
  validates :first_name, :last_name, :education, :address, presence: true
  geocoded_by :location, latitude: :lat, longitude: :lng
  after_validation :geocode

  attr_accessor :location

  has_many :appointments

  has_many :reviews,
           through: :appointments,
           source: :review

  has_many :doctor_specialties

  has_many :specialties,
           through: :doctor_specialties,
           source: :specialty
end
