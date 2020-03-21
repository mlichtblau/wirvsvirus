class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.integer :age
      t.integer :living_situation
      t.integer :workplace
      t.string :zip_code

      t.timestamps
    end
  end
end
