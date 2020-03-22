class CreateCriterions < ActiveRecord::Migration[6.0]
  def change
    create_table :criterions do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
