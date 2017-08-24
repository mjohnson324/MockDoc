class CreateDoctorCertifications < ActiveRecord::Migration[5.1]
  def change
    create_table :doctor_certifications do |t|
      t.integer :certification_id, null: false
      t.integer :doctor_id, null: false

      t.timestamps
    end

    add_index :doctor_certifications, :certification_id
    add_index :doctor_certifications, [:doctor_id, :certification_id], unique: true
  end
end
