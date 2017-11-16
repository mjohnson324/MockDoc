# == Schema Information
#
# Table name: doctors
#
#  id                     :integer          not null, primary key
#  gender                 :string           not null
#  education              :text             not null
#  lat                    :float            not null
#  lng                    :float            not null
#  professional_statement :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string           not null
#  last_name              :string           not null
#  degree                 :string           not null
#

class Doctor < ApplicationRecord
  validates :first_name, :last_name, :education, presence: true
  validates :gender, inclusion: { in: %w(male female) }
  validates :degree, inclusion: { in: %w(MD DMD DO DDS DPM) }
  geocoded_by :address, latitude: :lat, longitude: :lng

  attr_accessor :address

  has_many :appointments

  has_many :reviews,
           through: :appointments,
           source: :review

  has_many :doctor_specialties

  has_many :specialties,
           through: :doctor_specialties,
           source: :specialty

  has_many :doctor_certifications

  has_many :certifications,
           through: :doctor_certifications,
           source: :certification

  def get_address
    Geocoder.address(self.to_coordinates)
  end
end
