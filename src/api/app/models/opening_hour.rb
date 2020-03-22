class OpeningHour < ApplicationRecord
  belongs_to :testcenter

  enum day: [:sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday]
end
