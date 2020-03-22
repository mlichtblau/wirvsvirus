class DropGeneralCriterionsFromPatients < ActiveRecord::Migration[6.0]
  def change
    remove_column :patients, :living_situation, :integer
    remove_column :patients, :workplace, :integer
    remove_column :patients, :flu_vaccinated, :boolean
  end
end
