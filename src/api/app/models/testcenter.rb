class Testcenter < ApplicationRecord
  belongs_to :coordinate
  belongs_to :contact_datum
  has_many :criterions, through: :criterions_testcenters
  
  accepts_nested_attributes_for :coordinate
  accepts_nested_attributes_for :contact_datum
end
