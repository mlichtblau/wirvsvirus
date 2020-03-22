class Testcenter < ApplicationRecord

  validates :street, :zip_code, :city, presence: true

  has_many :criterions_testcenters
  has_many :criterions, through: :criterions_testcenters
  has_many :appointments
  belongs_to :coordinate
  belongs_to :contact_datum
  has_many :opening_hours

  
  accepts_nested_attributes_for :coordinate
  accepts_nested_attributes_for :contact_datum

  def self.all_verified
    return Testcenter.where.not(verified_at: nil).all
  end

  def test_slot_duration(week_day)
    self.daily_capacity / (self.opening_hours.find_by(day: week_day).closes_at - self.opening_hours.find_by(day: week_day).opens_at)
  end

end
