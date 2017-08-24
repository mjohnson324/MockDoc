class CreateDoctors < ActiveRecord::Migration[5.1]
  def change
    create_table :doctors do |t|
      t.string :gender, null: false
      t.text :education, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :professional_statement

      t.timestamps
    end
  end
end
