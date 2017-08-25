# == Schema Information
#
# Table name: appointments
#
#  id         :integer          not null, primary key
#  patient_id :integer          not null
#  doctor_id  :integer          not null
#  reason     :text             not null
#  start_time :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Appointment < ApplicationRecord
  validates :patient_id, :doctor_id, :reason, :start_time, presence: true

  belongs_to :doctor

  belongs_to :patient,
    class_name: :User,
    primary_key: :id,
    foreign_key: :patient_id
end
