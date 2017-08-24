class AddNamesToDoctors < ActiveRecord::Migration[5.1]
  def change
    add_column :doctors, :first_name, :string, null: false
    add_column :doctors, :last_name, :string, null: false
    add_column :doctors, :degree, :string, null: false
  end
end
