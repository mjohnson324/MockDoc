# == Schema Information
#
# Table name: patient_doctor_relationships
#
#  id         :integer          not null, primary key
#  patient_id :integer          not null
#  doctor_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PatientDoctorRelationship < ApplicationRecord
  validates :patient_id, :doctor_id, presence: true
  validates :patient_id, uniqueness: { scope: :doctor_id,
    message: "You are already a patient of this doctor!" }

  belongs_to :user,
    class_name: :User,
    foreign_key: :patient_id,
    primary_key: :id

  belongs_to :doctor
end
