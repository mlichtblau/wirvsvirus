class RenameTestcenterThroughputPerDayToDailyCapacity < ActiveRecord::Migration[6.0]
  def change
    rename_column :testcenters, :troughput_per_day, :daily_capacity
  end
end
