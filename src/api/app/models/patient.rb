class Patient < ApplicationRecord
  enum living_situation: [:alone, :community]
  enum workplace: [:medical, :police, :school, :retail, :other]


end
