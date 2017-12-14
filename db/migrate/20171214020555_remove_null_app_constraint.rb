class RemoveNullAppConstraint < ActiveRecord::Migration[5.1]
  def change
    change_column(:appointments, :address, :string, null: true)
  end
end
