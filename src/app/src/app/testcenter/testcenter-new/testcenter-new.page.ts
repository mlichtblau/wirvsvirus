import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ContactDatumProvider} from '../../shared/api/contact-datum/contact-datum';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {ContactDatum} from '../../shared/models/contact-datum';
import {Testcenter} from '../../shared/models/testcenter';
import {OpeningHour} from '../../shared/models/opening-hour';

@Component({
  selector: 'app-testcenter-new',
  templateUrl: './testcenter-new.page.html',
  styleUrls: ['./testcenter-new.page.scss'],
})
export class TestcenterNewPage implements OnInit, AfterViewInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  testcenter: Testcenter;

  openingHours: Array<OpeningHour>;

  contactDatum: ContactDatum;

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  };

  constructor(
      public contactDatumProvider: ContactDatumProvider,
      public testcenterProvider: TestcenterProvider
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  ngAfterViewInit(): void {
    this.slides.lockSwipes(true);
  }

  resetForm() {
    this.testcenter = {
      name: null,
      street: null,
      zip_code: null,
      city: null,
      coordinate_id: 2,
      contact_datum_id: null
    };

    this.openingHours = [{
      opens_at: null,
      closes_at: null,
      day: 0
    }];

    this.contactDatum = {
      phone: null,
      email: null
    };
  }

  slideTo(index: number) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(index);
    this.slides.lockSwipes(true);
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  saveTestcenter() {
    console.log(this.testcenter);
    this.contactDatumProvider.create(this.contactDatum)
        .subscribe((contactDatum) => {
          console.log(contactDatum);

          this.testcenter.contact_datum_id = contactDatum.id;
          this.testcenterProvider.create(this.testcenter)
              .subscribe((testcenter) => {
                this.resetForm();
                this.slideTo(0);
                console.log(testcenter);
              });
        });
    this.next();
  }

  isNextButtonActive(slide) {
    switch (slide) {
      case 'testcenter':
        return this.testcenter.name
            && this.testcenter.street
            && this.testcenter.zip_code
            && this.testcenter.city
            && this.openingHours[0].opens_at
            && this.openingHours[0].closes_at;
      case 'contact_datum':
        return !!this.contactDatum.email;
      default:
        return true;
    }
  }
}
