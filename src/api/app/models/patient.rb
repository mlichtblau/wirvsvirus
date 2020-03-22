class Patient < ApplicationRecord
  has_many :criterions_patients
  has_many :criterions, through: :criterions_patients

  enum living_situation: [:alone, :community]
  enum workplace: [:medical, :police, :school, :retail, :other]

end
