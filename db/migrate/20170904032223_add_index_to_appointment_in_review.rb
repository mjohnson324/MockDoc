class AddIndexToAppointmentInReview < ActiveRecord::Migration[5.1]
  def change
    add_index :reviews, :appointment_id
  end
end
