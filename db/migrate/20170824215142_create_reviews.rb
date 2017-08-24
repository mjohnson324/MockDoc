class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :doctor_id, null: false
      t.integer :patient_id, null: false
      t.integer :overall_rating, null: false
      t.integer :bedside_manner, null: false
      t.integer :wait_time, null: false
      t.text :body

      t.timestamps
    end

    add_index :reviews, :patient_id
    add_index :reviews, :doctor_id
  end
end
