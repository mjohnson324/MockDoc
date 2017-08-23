class CreateSpecialties < ActiveRecord::Migration[5.1]
  def change
    create_table :specialties do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :specialties, :name, unique: true
  end
end
