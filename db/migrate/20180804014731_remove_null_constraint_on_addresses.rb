class RemoveNullConstraintOnAddresses < ActiveRecord::Migration[5.1]
  def change
    change_column :doctors, :address, :string, null: false
  end
end
