import { ViewChild } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IonSlides } from '@ionic/angular'
import { Patient, CriterionNames } from '../shared/models/patient'
import { PatientProvider } from '../shared/api/patient/patient'
import { map, pick } from 'lodash'
import { getCriterions } from './criterions'

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides

  patientModel: Patient = {
    symptoms_since: '10.03.2020',
  }

  slideOpts = {
    speed: 400,
    centeredSlides: false,
  }

  criterions = getCriterions()

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
    // this.slides.lockSwipes(true)
  }

  unlock() {
    this.slides.lockSwipes(false)
  }

  next() {
    this.slides.slideNext()
  }

  nextAndLock() {
    this.next()
    // this.lock()
  }
}
