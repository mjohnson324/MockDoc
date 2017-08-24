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
end
