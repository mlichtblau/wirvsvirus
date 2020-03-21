class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.int :age
      t.int :living_situation
      t.int :workplace
      t.string :zip_code

      t.timestamps
    end
  end
end
