class Testcenter < ApplicationRecord
  require 'descriptive_statistics'
  include ActionView::Helpers::DateHelper

  validates :street, :zip_code, :city, presence: true

  has_many :testcenter_criterions
  has_many :criterions, through: :testcenter_criterions
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

    if delays.mean.nil?
      return "Keine Verspätung"
    end

    return time_ago_in_words(delays.mean.seconds.from_now)
  end

  def todays_appintments
    return self.appointments.where('appointment_time BETWEEN ? AND ?', DateTime.now.beginning_of_day, DateTime.now.end_of_day)
  end

  def self.all_verified
    return Testcenter.where.not(verified_at: nil).all
  end

  def self.all_open
    return Testcenter.all.select(&:open?)
  end

  def open?
    opening_hours_today = self.opening_hours.find_by(day: Date.today.wday)
    if opening_hours_today.nil?
      return false
    end

    return Time.now.between?(opening_hours_today.opens_at.to_time, opening_hours_today.closes_at.to_time)

  end

  def open_at?(given_datetime)
    opening_hours = self.opening_hours.find_by(day: given_datetime.wday)
    if opening_hours.nil?
      return false
    end

    return given_datetime.between?(opening_hours.opens_at, opening_hours.closes_at)
  end

  def next_opening_hour(given_datetime)
    open_days = self.opening_hours.collect { |opening_hour| opening_hour.day.to_i }
    next_open_day = given_datetime.wday
    days_jump = 0
    while not open_days.include? next_open_day
      days_jump = days_jump + 1
      next_open_day = (next_open_day + 1) % 6
    end

    next_opening_hour = self.opening_hours.find_by(day: next_open_day).opens_at
    next_opening_hour_datetime = given_datetime.to_date + days_jump.days + next_opening_hour.hours + next_opening_hour.minutes + next_opening_hour.seconds

    return next_opening_hour_datetime
  end

  def test_slot_duration(week_day)
    daily_opening_duration_in_hours = (self.opening_hours.find_by(day: week_day).closes_at - self.opening_hours.find_by(day: week_day).opens_at) / 3600.0
    return (daily_opening_duration_in_hours / self.daily_capacity).hours
  end

end
