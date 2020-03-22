import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-testcenter-new',
  templateUrl: './testcenter-new.page.html',
  styleUrls: ['./testcenter-new.page.scss'],
})
export class TestcenterNewPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  testcenter = {
    name: null,
    street: null,
    zip_code: null,
    city: null,
    opening_hours: [{
      opens_at: null,
      closes_at: null,
      day: 0
    }]
  };

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  };

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

  nextAndLock() {
    this.next();
    this.lock()
  }

  saveTestcenter() {
    console.log(this.testcenter);
    this.next();
  }
}
