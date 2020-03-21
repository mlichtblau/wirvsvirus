class RemoveNotNullConstraintForCriterionRegionReference < ActiveRecord::Migration[6.0]
  def change
    remove_reference :criterions, :region
    add_reference :criterions, :superregion, null: true
  end
end
