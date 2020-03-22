class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :testcenter
  belongs_to :feedback, optional: true
  belongs_to :appointment, foreign_key: :rescheduled_to_appointment_id, optional: true

  before_create :generate_automated_appointment_data

  def generate_automated_appointment_data
    if self.waiting_number.blank?
      self.waiting_number = Appointment.generate_next_waiting_number
    end
    if self.appointment_time.blank?
      last_appointment = self.testcenter.appointments.order(:appointment_time).last
      self.appointment_time = last_appointment.appointment_time + self.testcenter.test_slot_duration(last_appointment.appointment_time.wday)
    end
  end

  def self.generate_next_waiting_number
    todays_appointments = Appointment.where('appointment_time BETWEEN ? AND ?', DateTime.now.beginning_of_day, DateTime.now.end_of_day)
    return (todays_appointments.order(:appointment_time).last.waiting_number.to_i + 1).to_s
  end
end
