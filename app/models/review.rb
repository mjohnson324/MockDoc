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
            :wait_time, numericality: { only_integer: true,
                                        greater_than_or_equal_to: 1,
                                        less_than_or_equal_to: 5 }

  belongs_to :appointment
end
