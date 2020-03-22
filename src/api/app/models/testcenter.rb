class Testcenter < ApplicationRecord

  validates :street, :zip_code, :city, presence: true

  has_many :criterions_testcenters
  has_many :criterions, through: :criterions_testcenters
  has_many :appointments
  belongs_to :coordinate
  belongs_to :contact_datum
  has_many :opening_hours
  has_many :testcenter_staffs

  
  accepts_nested_attributes_for :coordinate
  accepts_nested_attributes_for :contact_datum

  def self.all_verified
    return Testcenter.where.not(verified_at: nil).all
  end

  def test_slot_duration(week_day)
    daily_opening_duration_in_hours = (self.opening_hours.find_by(day: week_day).closes_at - self.opening_hours.find_by(day: week_day).opens_at) / 3600.0
    return (daily_opening_duration_in_hours / self.daily_capacity).hours
  end

end
