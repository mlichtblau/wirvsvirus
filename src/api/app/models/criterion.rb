class Criterion < ApplicationRecord
  belongs_to :superregion, class_name: 'Criterion', optional: true
  
  enum kind: [ :symptom, :risk_factor, :visit ]
end
