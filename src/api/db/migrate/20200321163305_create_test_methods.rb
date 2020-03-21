class CreateTestMethods < ActiveRecord::Migration[6.0]
  def change
    create_table :test_methods do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
