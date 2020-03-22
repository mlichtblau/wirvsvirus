class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :testcenter
  belongs_to :feedback, optional: true
  belongs_to :appointment, foreign_key: :rescheduled_to_appointment_id, optional: true

  before_save :generate_automated_appointment_data

  def generate_automated_appointment_data
    self.waiting_number = generate_next_waiting_number
    last_appointment_time = self.testcenter.appointments.order(:appointment_time).last
    self.appointment_time = last_appointment_time + self.testcenter.test_slot_duration(last_appointment_time.wday)
  end

  def self.generate_next_waiting_number
    todays_appointments = Appointment.where('appointment_time BETWEEN ? AND ?', DateTime.now.beginning_of_day, DateTime.now.end_of_day)
    return (todays_appointments.order(:appointment_time).last.waiting_number.to_i + 1).to_s
  end
end
