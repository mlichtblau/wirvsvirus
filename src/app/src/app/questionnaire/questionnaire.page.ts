import { ViewChild } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides

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
