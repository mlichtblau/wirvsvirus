class Criterion < ApplicationRecord

  # todo: add constraint to ensure that only one fever is assigned to a patient

  has_many :criterions_patients
  has_many :patients, through: :criterions_patients
  
  belongs_to :superregion, class_name: 'Criterion', optional: true
  
  enum kind: [ :symptom, :risk_factor, :visit ]
end
