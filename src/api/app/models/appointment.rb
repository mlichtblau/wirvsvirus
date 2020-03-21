class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :testcenter
  belongs_to :feedback, optional: true
  belongs_to :appointment, foreign_key: :rescheduled_to_appointment_id, optional: true
end
