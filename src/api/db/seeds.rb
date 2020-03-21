# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

criterions = Criterion.create([
  {kind: :risk_factor, name: 'smoking'},
  {kind: :risk_factor, name: 'diabetes'},
  {kind: :risk_factor, name: 'chronic lung disease'},
  {kind: :risk_factor, name: 'cardiovascular disease'},
  {kind: :risk_factor, name: 'obesity'},
  {kind: :risk_factor, name: 'pregnancy'},
  {kind: :risk_factor, name: 'taking steroids'},
  {kind: :risk_factor, name: 'taking immunosuppressants'},
  {kind: :risk_factor, name: 'flu vaccinated'},
  {kind: :risk_factor, name: 'contact to confirmed case'},
  {kind: :risk_factor, name: 'contact to suspected case'},
  
  {kind: :symptom, name: 'fever'},
  {kind: :symptom, name: 'chills'},
  {kind: :symptom, name: 'fatigue'},
  {kind: :symptom, name: 'myalgia'},
  {kind: :symptom, name: 'cough'},
  {kind: :symptom, name: 'rhinitis'},
  {kind: :symptom, name: 'diarrhea'},
  {kind: :symptom, name: 'sore throat'},
  {kind: :symptom, name: 'headache'},
  {kind: :symptom, name: 'tachypnea'},
  {kind: :symptom, name: 'dyspnea'}
])

italy = Criterion.create(kind: :visit, name: 'italy')
lombardia = Criterion.create(kind: :visit, name: 'lombardia', superregion: italy)

spain = Criterion.create(kind: :visit, name: 'spain')
madrid = Criterion.create(kind: :visit, name: 'madrid', superregion: spain)

# TEST DATA

testcenter = Testcenter.create(
  name: 'Charité – Virchow Klinikum',
  street: 'Augustenburger Platz 1',
  zip_code: '13353',
  city: 'Berlin',
  # not valid
  directions: 'Mittelallee 1',
  coordinate_attributes: {longitude: 52.541899, latitude: 13.345846},
  daily_capacity: 10,
  contact_datum_attributes: {phone: '030 450 50'}
)

TestcenterStaff.create(testcenter: testcenter, staff_type: :coworker, pin_code: "1234")
TestcenterStaff.create(testcenter: testcenter, staff_type: :admin, pin_code: "5678")

patient = Patient.create(age: 35, living_situation: :community, workplace: :police, zip_code: "80331")

Appointment.create(patient: patient, testcenter: testcenter, time: DateTime.now + 2.hours, waiting_number: 555)