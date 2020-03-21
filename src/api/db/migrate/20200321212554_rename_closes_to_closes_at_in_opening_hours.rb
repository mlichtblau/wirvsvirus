class RenameClosesToClosesAtInOpeningHours < ActiveRecord::Migration[6.0]
  def change
    rename_column :opening_hours, :closes, :closes_at
  end
end
