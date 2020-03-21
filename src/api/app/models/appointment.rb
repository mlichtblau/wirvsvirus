class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :testcenter
  belongs_to :feedback
end
