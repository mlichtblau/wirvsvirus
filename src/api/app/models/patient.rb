class Patient < ApplicationRecord
  has_many :anamnestic_items
  has_many :criterions, through: :anamnestic_items
  
  def has_positive_criterion(criterion_name)
    return self.criterions.yes.where(name: criterion_name).any?
  end

  def symptoms
    return self.criterions.yes.where(kind: :symptom)
  end

  def has_any_symptoms
    return self.criterions.yes.where(kind: :symptom).any?
  end

  def has_respiratory_symptoms
    return self.criterions.yes.where(name: ['cough', 'rhinitis', 'sore throat', 'tachypnea', 'dyspnea']).any?
  end

  def test_indication
    if (self.has_any_symptoms and self.has_positive_criterion('contact confirmed case')) or (self.has_respiratory_symptoms and self.has_positive_criterion('high risk visit'))
      return true
    else
      return false
    end
  end

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
