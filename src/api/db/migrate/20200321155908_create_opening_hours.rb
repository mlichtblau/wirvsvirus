class CreateOpeningHours < ActiveRecord::Migration[6.0]
  def change
    create_table :opening_hours do |t|
      t.integer :day
      t.timestamp :opens
      t.timestamp :closes
      t.references :testcenter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
