class Add < ActiveRecord::Migration[5.1]
  def change
    add_index :appointments, [:start_time, :doctor_id], unique: true
  end
end
