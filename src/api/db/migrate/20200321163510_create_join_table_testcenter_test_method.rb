class CreateJoinTableTestcenterTestMethod < ActiveRecord::Migration[6.0]
  def change
    create_join_table :testcenters, :test_methods do |t|
      # t.index [:testcenter_id, :test_method_id]
      # t.index [:test_method_id, :testcenter_id]
    end
  end
end
