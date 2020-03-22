class RemoveSuperregionIdFromCriterions < ActiveRecord::Migration[6.0]
  def change

    remove_column :criterions, :superregion_id, :integer
  end
end
