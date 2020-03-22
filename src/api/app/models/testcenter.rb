class Testcenter < ApplicationRecord

  validates :street, :zip_code, :city, presence: true

  has_many :criterions_testcenters
  has_many :criterions, through: :criterions_testcenters
  belongs_to :coordinate
  belongs_to :contact_datum

  
  accepts_nested_attributes_for :coordinate
  accepts_nested_attributes_for :contact_datum

  def self.all_verified
    return Testcenter.where.not(verified_at: nil).all
  end

end
