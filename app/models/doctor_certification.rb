# == Schema Information
#
# Table name: doctor_certifications
#
#  id               :integer          not null, primary key
#  certification_id :integer          not null
#  doctor_id        :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class DoctorCertification < ApplicationRecord
end
