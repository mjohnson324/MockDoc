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
  validates :first_name, :last_name, :education, presence: true
  geocoded_by :address, latitude: :lat, longitude: :lng
  after_validation :geocode

  attr_accessor :address

  has_many :appointments

  has_many :reviews,
           through: :appointments,
           source: :review

  has_many :doctor_specialties

  has_many :specialties,
           through: :doctor_specialties,
           source: :specialty

  def get_address
    Geocoder.address(self.to_coordinates)
  end
end
