class SplitNamesIntoFirstAndLast < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :name

    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
  end
end
