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
end
