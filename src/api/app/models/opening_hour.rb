class OpeningHour < ApplicationRecord
  belongs_to :testcenter

  enum day: [:monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday]
end
