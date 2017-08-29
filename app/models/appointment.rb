# == Schema Information
#
# Table name: appointments
#
#  id         :integer          not null, primary key
#  patient_id :integer
#  doctor_id  :integer          not null
#  reason     :text
#  start_time :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Appointment < ApplicationRecord
  validates :doctor_id, :start_time, presence: true
  validates :doctor_id, uniqueness: { scope: :start_time }

  belongs_to :doctor

  belongs_to :patient,
    class_name: :User,
    primary_key: :id,
    foreign_key: :patient_id,
    optional: true
end
