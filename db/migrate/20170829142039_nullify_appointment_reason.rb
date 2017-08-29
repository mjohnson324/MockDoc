class NullifyAppointmentReason < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:appointments, :reason, true)
  end
end
