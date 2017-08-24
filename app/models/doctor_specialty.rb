# == Schema Information
#
# Table name: doctor_specialties
#
#  id           :integer          not null, primary key
#  specialty_id :integer          not null
#  doctor_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class DoctorSpecialty < ApplicationRecord
end
