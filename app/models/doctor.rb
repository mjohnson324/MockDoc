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
  validates :lat, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }
  validates :lng, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
  validates :degree, inclusion: { in: %w(MD DMD DO DDS DPM) }
  # validates :specialties, specialties.length > 0
  geocoded_by :address, latitude: :lat, longitude: :lng
  before_validation :geocode

  attr_reader :address

  def address=(address)
    @address = address
  end

  has_many :appointments,
  -> {where(patient_id: nil, start_time: DateTime.now..6.days.from_now)},
  dependent: :destroy
  has_many :patients, through: :appointments, source: :patient

  has_many :reviews

  has_many :doctor_specialties

  has_many :specialties,
    through: :doctor_specialties,
    source: :specialty

  has_many :doctor_certifications

  has_many :certifications,
    through: :doctor_certifications,
    source: :certification

  # def average_rating
  #   reviews.average(:rating)
  # end
end
