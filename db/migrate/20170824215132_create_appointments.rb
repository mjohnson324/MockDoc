class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.integer :patient_id, null: false
      t.integer :doctor_id, null: false
      t.text :reason, null: false

      t.timestamp :start_time, null: false

      t.timestamps
    end

    add_index :appointments, :patient_id
    add_index :appointments, :doctor_id
  end
end
