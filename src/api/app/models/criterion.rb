class Criterion < ApplicationRecord

  # todo: add constraint to ensure that only one fever is assigned to a patient

  has_many :anamnestic_items
  has_many :patients, through: :anamnestic_items

  enum kind: [ :symptom, :risk_factor, :visit, :contact, :general ]

  scope :yes, -> { merge(AnamnesticItem.where(answer: :yes)) }
  scope :no, -> { merge(AnamnesticItem.where(answer: :no)) }
  scope :unsure, -> { merge(AnamnesticItem.where(answer: :unsure)) }

end
