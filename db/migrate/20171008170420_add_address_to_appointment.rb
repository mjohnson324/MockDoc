class AddAddressToAppointment < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :address, :string, null: false
  end
end
