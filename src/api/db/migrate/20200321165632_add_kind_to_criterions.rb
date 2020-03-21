class AddKindToCriterions < ActiveRecord::Migration[6.0]
  def change
    add_column :criterions, :kind, :integer
  end
end
