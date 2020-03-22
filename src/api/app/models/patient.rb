class Patient < ApplicationRecord
  has_many :anamnestic_items
  has_many :criterions, through: :anamnestic_items

  enum living_situation: [:alone, :community]
  enum workplace: [:medical, :police, :school, :retail, :other]

end
