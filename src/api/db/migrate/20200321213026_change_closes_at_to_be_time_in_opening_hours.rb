class ChangeClosesAtToBeTimeInOpeningHours < ActiveRecord::Migration[6.0]
  def change
    change_column :opening_hours, :closes_at, :time
  end
end
