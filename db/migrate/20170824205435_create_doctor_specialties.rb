class CreateDoctorSpecialties < ActiveRecord::Migration[5.1]
  def change
    create_table :doctor_specialties do |t|
      t.integer :specialty_id, null: false
      t.integer :doctor_id, null: false

      t.timestamps
    end

    add_index :doctor_specialties, :specialty_id
    add_index :doctor_specialties, [:doctor_id, :specialty_id], unique: true
  end
end
