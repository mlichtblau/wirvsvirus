class AddSupportForMaybeAnswerOption < ActiveRecord::Migration[6.0]
  def change
    rename_table :criterions_patients, :anamnestic_items
    add_column :anamnestic_items, :answer, :integer
  end
end
