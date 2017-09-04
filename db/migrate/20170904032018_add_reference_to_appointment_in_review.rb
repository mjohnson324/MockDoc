class AddReferenceToAppointmentInReview < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :appointment_id, :integer, null: false
  end
end
