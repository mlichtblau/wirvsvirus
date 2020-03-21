class CreateCriterions < ActiveRecord::Migration[6.0]
  def change
    create_table :criterions do |t|
      t.string :name
      t.text :description
      t.references :region, null: false, foreign_key: true

      t.timestamps
    end
  end
end
