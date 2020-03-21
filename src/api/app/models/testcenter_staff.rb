class TestcenterStaff < ApplicationRecord
  belongs_to :testcenter
  enum staff_type: [:admin, :coworker]
end
