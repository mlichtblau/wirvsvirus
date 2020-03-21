class CreateRegions < ActiveRecord::Migration[6.0]
  def change
    create_table :regions do |t|
      t.string :name
      t.integer :risk_score
      t.references :part_of, null: false, foreign_key: true

      t.timestamps
    end
  end
end
