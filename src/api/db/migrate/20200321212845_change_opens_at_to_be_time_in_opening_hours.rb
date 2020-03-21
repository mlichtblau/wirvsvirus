class ChangeOpensAtToBeTimeInOpeningHours < ActiveRecord::Migration[6.0]
  def change
    change_column :opening_hours, :opens_at, :time
  end
end
