import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ContactDatumProvider} from '../../shared/api/contact-datum/contact-datum';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {ContactDatum} from '../../shared/models/contact-datum';
import {Testcenter} from '../../shared/models/testcenter';

@Component({
  selector: 'app-testcenter-new',
  templateUrl: './testcenter-new.page.html',
  styleUrls: ['./testcenter-new.page.scss'],
})
export class TestcenterNewPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  testcenter: Testcenter = {
    name: null,
    street: null,
    zip_code: null,
    city: null,
    coordinate_id: 2,
    contact_datum_id: null
  };

  openingHours = [{
    opens_at: null,
    closes_at: null,
    day: 0
  }];

  contactDatum: ContactDatum = {
    phone: null,
    email: null
  };

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  };

  constructor(
      public contactDatumProvider: ContactDatumProvider,
      public testcenterProvider: TestcenterProvider
  ) {}

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
    this.contactDatumProvider.create(this.contactDatum)
        .subscribe((contactDatum) => {
          console.log(contactDatum);

          this.testcenter.contact_datum_id = contactDatum.id;
          this.testcenterProvider.create(this.testcenter)
              .subscribe((testcenter) => {
                console.log(testcenter);
              });
        });

    this.next();
  }
}
