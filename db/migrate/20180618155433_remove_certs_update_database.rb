class RemoveCertsUpdateDatabase < ActiveRecord::Migration[5.1]
  def change
    drop_table :certifications
    drop_table :doctor_certifications

    remove_column :doctors, :gender, :string
    remove_column :doctors, :professional_statement, :text
    add_column :doctors, :quote, :text
    change_column(:doctors, :education, :text, null: true)
    change_column(:doctors, :degree, :string, null: true)
  end
end
