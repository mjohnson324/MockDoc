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
#

class Review < ApplicationRecord
  validates :appointment_id, presence: true, uniqueness: true
  validates :overall_rating,
            :bedside_manner,
            :wait_time, numericality: { only_integer: true }
  validate :appointment_took_place

  belongs_to :appointment

  def appointment_took_place
    self.appointment.start_time < self.created_at
  end
end
