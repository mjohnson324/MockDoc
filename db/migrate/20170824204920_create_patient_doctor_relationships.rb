class CreatePatientDoctorRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :patient_doctor_relationships do |t|
      t.integer :patient_id, null: false
      t.integer :doctor_id, null: false

      t.timestamps
    end
    
    add_index :patient_doctor_relationships, :patient_id
    add_index :patient_doctor_relationships, [:doctor_id, :patient_id], unique: true
  end

end
