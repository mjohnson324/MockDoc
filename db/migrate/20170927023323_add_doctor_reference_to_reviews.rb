class AddDoctorReferenceToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :doctor_id, :integer, null: false
    add_index :reviews, :doctor_id
  end
end
