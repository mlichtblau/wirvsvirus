class AnamnesticItem < ApplicationRecord
  
  belongs_to :criterion
  belongs_to :patient
  
  enum answer: [ :yes, :no, :unsure ]
  
end
