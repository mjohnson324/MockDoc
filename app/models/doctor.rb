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
  validates :degree, inclusion: { in: %w(MD DMD DO DDS) }

  has_many :appointments, dependent: :destroy

  has_many :patients, through: :appointments, source: :patient

  has_many :specialties

  has_many :certifications
end
