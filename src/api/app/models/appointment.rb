class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :testcenter
  belongs_to :feedback, optional: true
  belongs_to :rescheduled_to, class_name: 'Appointment', foreign_key: :rescheduled_to_appointment_id, optional: true

  scope :not_canceled, -> {where(canceled_at: nil)}
  scope :not_yet_processed, -> {where(processed_at: nil)}

  before_create :generate_automated_appointment_data

  def generate_automated_appointment_data
    self.waiting_number = Appointment.generate_next_waiting_number
    last_appointment = self.testcenter.appointments.order(:appointment_time).last
    if last_appointment.nil?
      if self.testcenter.open_at?(DateTime.now + 30.minutes)
        self.appointment_time = DateTime.now + 30.minutes
      else
        self.appointment_time = self.testcenter.next_opening_hour(DateTime.now)
      end
    else
      next_appointment_time = last_appointment.appointment_time + self.testcenter.test_slot_duration(last_appointment.appointment_time.wday)
      if not self.testcenter.open_at?(next_appointment_time)
        next_appointment_time = self.testcenter.next_opening_hour(next_appointment_time)
      end
      self.appointment_time = next_appointment_time
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
