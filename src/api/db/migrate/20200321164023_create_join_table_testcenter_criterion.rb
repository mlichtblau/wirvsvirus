class CreateJoinTableTestcenterCriterion < ActiveRecord::Migration[6.0]
  def change
    create_join_table :testcenters, :criterions do |t|
      # t.index [:testcenter_id, :criterion_id]
      # t.index [:criterion_id, :testcenter_id]
    end
  end
end
