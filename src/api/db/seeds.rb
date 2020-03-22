# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

criterions = Criterion.create([
  {kind: :general, name: 'flu vaccinated'},
  {kind: :general, name: 'critical workplace'},
  {kind: :general, name: 'living alone'},

  {kind: :risk_factor, name: 'smoking'},
  {kind: :risk_factor, name: 'diabetes'},
  {kind: :risk_factor, name: 'chronic lung disease'},
  {kind: :risk_factor, name: 'cardiovascular disease'},
  {kind: :risk_factor, name: 'obesity'},
  {kind: :risk_factor, name: 'pregnancy'},
  {kind: :risk_factor, name: 'taking steroids'},
  {kind: :risk_factor, name: 'taking immunosuppressants'},

  # {kind: :symptom, name: 'fever below 38'},
  # {kind: :symptom, name: 'fever 38'},
  # {kind: :symptom, name: 'fever 39'},
  # {kind: :symptom, name: 'fever 40'},
  # {kind: :symptom, name: 'fever 41'},
  # {kind: :symptom, name: 'fever 42'},
  # {kind: :symptom, name: 'fever above 42'},
  {kind: :symptom, name: 'fever', description: 'Fieber über 38°C in den letzten 24 Stunden'},
  {kind: :symptom, name: 'chills'},
  {kind: :symptom, name: 'fatigue'},
  {kind: :symptom, name: 'myalgia'},
  {kind: :symptom, name: 'cough'},
  {kind: :symptom, name: 'rhinitis'},
  {kind: :symptom, name: 'diarrhea'},
  {kind: :symptom, name: 'sore throat'},
  {kind: :symptom, name: 'headache'},
  {kind: :symptom, name: 'tachypnea'},
  {kind: :symptom, name: 'dyspnea'},

  {kind: :contact, name: 'contact confirmed case'},
  {kind: :contact, name: 'contact suspected case'},

  {kind: :visit, name: 'high risk visit'}
])


testcenter = Testcenter.create(
  name: 'Charité – Virchow Klinikum',
  street: 'Augustenburger Platz 1',
  zip_code: '13353',
  city: 'Berlin',
  directions: 'Mittelallee 1',
  coordinate_attributes: {longitude: 52.541899, latitude: 13.345846},
  daily_capacity: 10,
  contact_datum_attributes: {phone: '030 450 50'},
  verified_at: DateTime.now
)

TestcenterCriterion.create(criterion: criterions[0], testcenter: testcenter)
TestcenterCriterion.create(criterion: criterions[1], testcenter: testcenter)
TestcenterCriterion.create(criterion: criterions[2], testcenter: testcenter)


OpeningHour.create(testcenter: testcenter, day: :monday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)
OpeningHour.create(testcenter: testcenter, day: :tuesday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)
OpeningHour.create(testcenter: testcenter, day: :wednesday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)
OpeningHour.create(testcenter: testcenter, day: :thursday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)
OpeningHour.create(testcenter: testcenter, day: :friday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)
OpeningHour.create(testcenter: testcenter, day: :saturday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)
OpeningHour.create(testcenter: testcenter, day: :sunday, opens_at: Time.now - 6.hours, closes_at: Time.now + 6.hours)

TestcenterStaff.create(testcenter: testcenter, staff_type: :coworker, pin_code: "1234")
TestcenterStaff.create(testcenter: testcenter, staff_type: :admin, pin_code: "5678")

patient = Patient.create(age: 35, zip_code: "80331")

AnamnesticItem.create(patient: patient, criterion: criterions[0], answer: :yes)
AnamnesticItem.create(patient: patient, criterion: criterions[1], answer: :yes)
AnamnesticItem.create(patient: patient, criterion: criterions[2], answer: :yes)
AnamnesticItem.create(patient: patient, criterion: criterions[3], answer: :yes)

Appointment.create(patient: patient, testcenter: testcenter, appointment_time: DateTime.now + 2.hours, waiting_number: "555")
