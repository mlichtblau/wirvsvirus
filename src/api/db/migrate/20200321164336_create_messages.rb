class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.references :testcenter, null: false, foreign_key: true
      t.references :testcenter_staff, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
