# == Schema Information
#
# Table name: reviews
#
#  id             :integer          not null, primary key
#  overall_rating :integer          not null
#  bedside_manner :integer          not null
#  wait_time      :integer          not null
#  body           :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  appointment_id :integer          not null
#  doctor_id      :integer          not null
#

class Review < ApplicationRecord
  validates :appointment_id, :doctor_id, presence: true
  validates :appointment_id, uniqueness: true
  validates :overall_rating,
            :bedside_manner,
            :wait_time, numericality: { only_integer: true,
                                        greater_than_or_equal_to: 1,
                                        less_than_or_equal_to: 5 }
  validate :patient_is_present
  after_validation :check_review_time

  belongs_to :appointment
  belongs_to :doctor

  def patient_is_present
    unless self.appointment.patient_id
      errors.add(:appointment_id, "Appointment must have a patient")
    end
  end

  def check_review_time
    if self.created_at < self.appointment.start_time - 1.hour
      errors.add(:created_at, "Please review the appointment after it's over")
      self.destroy
    end
  end
end
