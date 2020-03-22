class Patient < ApplicationRecord
  has_many :anamnestic_items
  has_many :criterions, through: :anamnestic_items

  enum living_situation: [:alone, :community]
  enum workplace: [:medical, :police, :school, :retail, :other]

  def testcenters
    fulfilled_criteria_id = self.anamnestic_items.where(answer: :yes).collect { |item| item.criterion.id }

    possible_testcenters = []

    Testcenter.all_verified.each do |center|
      center_criteria_id = center.criterions.collect { |criterion| criterion.id }
      if (center_criteria_id - fulfilled_criteria_id).count == 0
        possible_testcenters << center
      end
    end

    return possible_testcenters
  end

end
