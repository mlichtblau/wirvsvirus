class Message < ApplicationRecord
  belongs_to :testcenter
  belongs_to :testcenter_staff
end
