import {AfterViewInit, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core'
import { IonSlides } from '@ionic/angular'
import { Patient, CriterionNames } from '../shared/models/patient'
import { PatientProvider } from '../shared/api/patient/patient'
import { map, pick } from 'lodash'
import { getCriterions } from './criterions'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit, AfterViewInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides

  currentDateString = new Date(Date.now()).toISOString();

  patientModel: Patient = {
    symptoms_since: new Date(Date.now()).toISOString()
  };

  slideOpts = {
    speed: 400,
    centeredSlides: false,
  };

  criterions = getCriterions()

  constructor(public patientProvider: PatientProvider, public storage: Storage) {}

  sendResults() {
    this.patientModel.anamnestic_items = map(this.criterions, item =>
      pick(item, ['criterion', 'answer'])
    );
    console.log(this.patientModel);
    this.patientProvider.create(this.patientModel)
        .subscribe(patient => {
          this.storage.set('patient', patient)
              .then(() => {
                if(patient.test_indication){
                  this.next();
                  this.next();
                }
                else{
                  this.next();
                }

              });
        });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  allowNext(prop: string) {
    return !!this.patientModel[prop]
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext()
    this.slides.lockSwipes(true);
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev()
    this.slides.lockSwipes(true);
  }
}
