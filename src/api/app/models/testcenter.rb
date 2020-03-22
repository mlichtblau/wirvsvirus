class Testcenter < ApplicationRecord
  require 'descriptive_statistics'
  include ActionView::Helpers::DateHelper

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

  def current_delay
    todays_processed_appointments = self.todays_appintments.where.not(processed_at: nil)
    delays = []
    todays_processed_appointments.each do |appointment|
      delays << appointment.processed_at - appointment.appointment_time
    end

    delay_str = time_ago_in_words(delays.mean.seconds.from_now)

    if delays.mean.nil?
      delay_str = "keine Verspätung"
    end

    return delay_str
  end

  def todays_appintments
    return self.appointments.where('appointment_time BETWEEN ? AND ?', DateTime.now.beginning_of_day, DateTime.now.end_of_day)
  end

  def self.all_verified
    return Testcenter.where.not(verified_at: nil).all
  end

  def test_slot_duration(week_day)
    daily_opening_duration_in_hours = (self.opening_hours.find_by(day: week_day).closes_at - self.opening_hours.find_by(day: week_day).opens_at) / 3600.0
    return (daily_opening_duration_in_hours / self.daily_capacity).hours
  end

end
