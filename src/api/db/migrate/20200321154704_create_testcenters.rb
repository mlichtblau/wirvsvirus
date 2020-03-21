class CreateTestcenters < ActiveRecord::Migration[6.0]
  def change
    create_table :testcenters do |t|
      t.string :name
      t.string :street
      t.string :zip_code
      t.string :city
      t.text :directions
      t.references :coordinate, null: false, foreign_key: true
      t.integer :troughput_per_day
      t.float :registered_vs_non_registered_preference_ratio
      t.timestamp :verified_at
      t.references :contact_datum, null: false, foreign_key: true

      t.timestamps
    end
  end
end
