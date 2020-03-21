class AddSymptomsSinceToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :symptoms_since, :date
  end
end
