# == Schema Information
#
# Table name: certifications
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Certification < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
