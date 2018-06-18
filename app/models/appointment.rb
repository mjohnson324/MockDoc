# == Schema Information
#
# Table name: appointments
#
#  id         :bigint(8)        not null, primary key
#  address    :string
#  start_time :datetime         not null
#  reason     :text
#  patient_id :integer
#  doctor_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

class Appointment < ApplicationRecord
  validates :doctor_id, :start_time, presence: true
  validates :doctor_id, uniqueness: { scope: :start_time }

  belongs_to :doctor

  belongs_to :patient,
             class_name: :User,
             primary_key: :id,
             foreign_key: :patient_id,
             optional: true

  has_one :review, dependent: :destroy
end
