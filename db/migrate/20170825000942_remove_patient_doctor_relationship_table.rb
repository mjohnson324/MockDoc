class RemovePatientDoctorRelationshipTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :patient_doctor_relationships
  end
end
