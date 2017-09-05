class ChangeReviewsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :doctor_id
    remove_column :reviews, :patient_id

    remove_index :reviews, :appointment_id
    add_index :reviews, :appointment_id, unique: true
  end
end
