class Patient < ApplicationRecord
  has_many :anamnestic_items
  has_many :criterions, through: :anamnestic_items

  enum living_situation: [:alone, :community]
  enum workplace: [:medical, :police, :school, :retail, :other]

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

end
