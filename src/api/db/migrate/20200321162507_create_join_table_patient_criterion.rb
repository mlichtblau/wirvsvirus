class CreateJoinTablePatientCriterion < ActiveRecord::Migration[6.0]
  def change
    create_join_table :patients, :criterions do |t|
      # t.index [:patient_id, :criterion_id]
      # t.index [:criterion_id, :patient_id]
    end
  end
end
