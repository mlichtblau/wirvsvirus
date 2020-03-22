class CreateTestcenterCriterions < ActiveRecord::Migration[6.0]
  def change
    create_table :testcenter_criterions do |t|
      t.references :criterion, null: false, foreign_key: true
      t.references :testcenter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
