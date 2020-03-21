class CreateTestcenterStaffs < ActiveRecord::Migration[6.0]
  def change
    create_table :testcenter_staffs do |t|
      t.references :testcenter, null: false, foreign_key: true
      t.integer :staff_type
      t.string :pin_code

      t.timestamps
    end
  end
end
