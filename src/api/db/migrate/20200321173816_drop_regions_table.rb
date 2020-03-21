class DropRegionsTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :regions
  end
end
