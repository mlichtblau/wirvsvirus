type CriterionQuestion = {
  criterion: string
  question?: string
  answer?: 'yes' | 'no' | 'unsure'
}

export function getCriterions() {
  return [
    { criterion: 'smoking', question: 'Rauchen Sie?' },
    { criterion: 'pregnancy', question: 'Sind Sie schwanger?' },
    {
      criterion: 'chronic lung disease',
      question: 'Haben Sie eine chronische Lungen Krankenheit?',
    },
    {
      criterion: 'diabetes',
      question: 'Haben Sie Diabetes?',
    },
    {
      criterion: 'cardiovascular disease',
      question: 'Haben Sie chronische Herzerkrankungen?',
    },
    {
      criterion: 'obesity',
      question: 'Wurde bei Ihnen Adipositas (Fettsucht) diagnostiziert?',
    },
    {
      criterion: 'taking steroids',
      question: 'Nehmen Sie actuell Cortison ein (in Tablettenform)?',
    },
    {
      criterion: 'taking immunosuppressants',
      question: 'Nehmen Sie aktuell Immunosuppressiva?',
    },
    {
      criterion: 'fever',
      question: 'Hatten Sie in den letzten 24 Stunden Fieber?',
    },
    { criterion: 'chills', question: 'Haben Sie Schüttelfrost?' },
    {
      criterion: 'fatigue',
      question: 'Fühlen Sie sich schlapp oder abgeschlagen?',
    },
    { criterion: 'myalgia', question: 'Haben Sie Gliederschmerzen?' },
    { criterion: 'cough', question: 'Haben Sie anhaltenden Husten?' },
    { criterion: 'rhinitis', question: 'Haben Sie Schnupfen?' },
    { criterion: 'diarrhea', question: 'Haben Sie Durchfall?' },
    { criterion: 'sore throat', question: 'Haben Sie Halsschmerzen?' },
    { criterion: 'headache', question: 'Haben Sie Kopfschmerzen?' },
    {
      criterion: 'dyspnea',
      question: 'Sind Sie schneller außer Atem als sonst?',
    },
    {
      criterion: 'contact confirmed case',
      question: 'Hatten Sie engen Kontakt zu einem bestätigten Fall?',
    },
    { criterion: 'contact suspected case', question: 'Hatten Sie engen Kontakt zu einem Verdachtsfall ?' },
    {
      criterion: 'high risk visit',
      question:
        'Haben Sie sich in den letzten 4 Wochen in einem der folgenden Risikogebiete aufgehalten?',
    },
    { criterion: 'living alone', question: 'Leben Sie alleine?' },
    {
      criterion: 'critical workplace',
      question:
        'Arbeiten Sie in einem strukturreleveanten Beruf? (Polizei, Arzt, etc.)',
    },
    {
      criterion: 'flu vaccinated',
      question: 'Wurden Sie seit Oktober 2019 gegen Grippe geimpft?',
    },
  ]
}
