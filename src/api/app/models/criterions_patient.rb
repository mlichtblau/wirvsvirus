class CriterionsPatient < ApplicationRecord
  
  belongs_to :criterion
  belongs_to :patient
  
end
