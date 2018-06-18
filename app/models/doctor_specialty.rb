# == Schema Information
#
# Table name: doctor_specialties
#
#  id           :bigint(8)        not null, primary key
#  specialty_id :integer          not null
#  doctor_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null

class DoctorSpecialty < ApplicationRecord
  validates :specialty_id, :doctor_id, presence: true
  validates :doctor_id, uniqueness: { scope: :specialty_id }

  belongs_to :doctor

  belongs_to :specialty
end
