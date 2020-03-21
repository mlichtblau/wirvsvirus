class Criterion < ApplicationRecord
  belongs_to :region, class_name: 'Criterion', foreign_key: 'criterion_id', optional: true
  
  enum kind: [ :symptom, :risk_factor, :visit ]
end
