import { ViewChild } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IonSlides } from '@ionic/angular'
import { Patient, CriterionNames } from '../shared/models/patient'
import { PatientProvider } from '../shared/api/patient/patient'
import { map, pick } from 'lodash'

type CriterionQuestion = {
  criterion: CriterionNames
  question?: string
  answer?: 'yes' | 'no' | 'unsure'
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides

  patientModel: Patient = {}

  criterions: CriterionQuestion[] = [
    { criterion: 'smoking', question: 'Do you smoke?' },
    { criterion: 'pregnancy', question: 'Are you pregnant?' },
    {
      criterion: 'chronic lung disease',
      question: 'Do you have a chronic lung disease?',
    },
  ]

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  }

  sendResults() {
    this.patientModel.anamnestic_items = map(this.criterions, item =>
      pick(item, ['criterion', 'answer'])
    )
    console.log(this.patientModel)
    this.patientProvider.create(this.patientModel).subscribe(patient => {})
  }

  constructor(public patientProvider: PatientProvider) {}

  ngOnInit() {}

  unlockOnChange(prop: string) {
    if (this.allowNext(prop)) {
      this.unlock()
    }
  }

  allowNext(prop: string) {
    return !!this.patientModel[prop]
  }

  lock() {
    this.slides.lockSwipes(true)
  }

  unlock() {
    this.slides.lockSwipes(false)
  }

  next() {
    this.slides.slideNext()
  }

  nextAndLock() {
    this.next()
    this.lock()
  }
}
