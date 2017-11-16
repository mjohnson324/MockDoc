class RemoveReviewDoctorId < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :doctor_id
  end
end
