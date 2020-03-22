class Criterion < ApplicationRecord

  # todo: add constraint to ensure that only one fever is assigned to a patient

  has_many :anamnestic_items
  has_many :patients, through: :anamnestic_items
  
  belongs_to :superregion, class_name: 'Criterion', optional: true
  
  enum kind: [ :symptom, :risk_factor, :visit, :contact ]
end
