class MakePatientAppointmentNullable < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:appointments, :patient_id, true)
  end
end
