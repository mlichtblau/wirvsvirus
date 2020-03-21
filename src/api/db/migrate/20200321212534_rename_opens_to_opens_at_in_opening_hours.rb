class RenameOpensToOpensAtInOpeningHours < ActiveRecord::Migration[6.0]
  def change
    rename_column :opening_hours, :opens, :opens_at
  end
end
