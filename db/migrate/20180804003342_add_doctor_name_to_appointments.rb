class AddDoctorNameToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :first_name, :string, null: false
    add_column :appointments, :last_name, :string, null: false
    add_column :doctors, :address, :string, null: false
  end
end
