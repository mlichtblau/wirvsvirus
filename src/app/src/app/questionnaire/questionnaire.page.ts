import { ViewChild } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IonSlides } from '@ionic/angular'

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

  patientModel: PatientModel = {}

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  }

  constructor() {}

  ngOnInit() {}

  lock() {
    this.slides.lockSwipes(true)
  }

  unlock() {
    this.slides.lockSwipes(false)
  }

  next() {
    this.slides.slideNext()
  }

  prev() {
    this.slides.slidePrev()
  }
}
