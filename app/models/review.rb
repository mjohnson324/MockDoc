# == Schema Information
#
# Table name: reviews
#
#  id             :integer          not null, primary key
#  doctor_id      :integer          not null
#  patient_id     :integer          not null
#  overall_rating :integer          not null
#  bedside_manner :integer          not null
#  wait_time      :integer          not null
#  body           :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Review < ApplicationRecord
  validates :doctor_id, :patient_id, presence: true
  validates :overall_rating, :bedside_manner, :wait_time, presence: true
  validates :overall_rating, :bedside_manner, :wait_time, numericality: true

  belongs_to :doctor

  belongs_to :patient,
    class_name: :User,
    foreign_key: :patient_id,
    primary_key: :id
end
