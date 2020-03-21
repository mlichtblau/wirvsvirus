class AddFluVaccinatedToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :flu_vaccinated, :boolean
  end
end
