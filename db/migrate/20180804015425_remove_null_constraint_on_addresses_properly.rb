class RemoveNullConstraintOnAddressesProperly < ActiveRecord::Migration[5.1]
  def change
    change_column_null :doctors, :address, true
  end
end
