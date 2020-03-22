class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :testcenter
  belongs_to :feedback, optional: true
  belongs_to :rescheduled_to, class_name: 'Appointment', foreign_key: :rescheduled_to_appointment_id, optional: true

  before_create :generate_automated_appointment_data

  def generate_automated_appointment_data
    self.waiting_number = Appointment.generate_next_waiting_number
    last_appointment = self.testcenter.appointments.order(:appointment_time).last
    if last_appointment.nil?
      self.appointment_time = DateTime.now + 30.minutes
    else
      self.appointment_time = last_appointment.appointment_time + self.testcenter.test_slot_duration(last_appointment.appointment_time.wday)
    end
  end

  def self.generate_next_waiting_number
    todays_appointments = Appointment.where('appointment_time BETWEEN ? AND ?', DateTime.now.beginning_of_day, DateTime.now.end_of_day)
    if todays_appointments.empty?
      return 1.to_s
    else
      return (todays_appointments.order(:appointment_time).last.waiting_number.to_i + 1).to_s
    end
  end
end
