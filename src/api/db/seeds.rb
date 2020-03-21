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

# italy = Criterion.create(kind: :visit, name: 'italy')
# lombardia = Criterion.create(kind: :visit, name: 'lombardia', region: italy)
