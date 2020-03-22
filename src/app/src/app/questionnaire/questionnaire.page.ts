import { ViewChild } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IonSlides } from '@ionic/angular'
import {Patient} from '../shared/models/patient';
import {PatientProvider} from '../shared/api/patient/patient';

type Criterions = string

type PatientModel = {
  age?: number
  living_situation?: 'community' | 'single'
  workplace?: 'police' | 'other'
  zip_code?: number
  criterion_names?: Criterions[]
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides

  patient: Patient = {
    zip_code: null,
    age: null,
    living_situation: null,
    workplace: null,
    anamnestic_items: [{
      criterion: '',
      answer: null
    }]
};

  constructor(
      public patientProvider: PatientProvider
  ) {}

  patientModel: PatientModel = {}

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  }

  addAnamnesticItem(item) {
    this.patient.anamnestic_items.push(item);
  }

  ngOnInit() {}

  save() {
    this.patientProvider.create(this.patient)
        .subscribe((patient) => {

        })
  }

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
