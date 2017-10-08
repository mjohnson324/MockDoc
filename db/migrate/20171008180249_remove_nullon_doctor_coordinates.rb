class RemoveNullonDoctorCoordinates < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:doctors, :lat, true)
    change_column_null(:doctors, :lng, true)
  end
end
