class CreateScaffolds < ActiveRecord::Migration[6.0]
  def change
    create_table :scaffolds do |t|
      t.string :CapacityLimit
      t.references :testcenter, null: false, foreign_key: true
      t.timestamp :reached_at

      t.timestamps
    end
  end
end
