import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-for-patients',
  templateUrl: './info-for-patients.page.html',
  styleUrls: ['./info-for-patients.page.scss'],
})
export class InfoForPatientsPage implements OnInit {

  testcenter: {
    name: string,
    street: string,
    zipCode: string,
    city: string,
    directions: string,
    openingHours: Array<{
      day: number,
      opensAt: string,
      closesAt: string
    }>
  } = {
    name: "Uni Klinikum Göttingen",
    street: "Robert-Koch-Straße",
    zipCode: "37075",
    city: "Göttingen",
    directions: "Bitte vor dem Eingang warten.",
    openingHours: [{
      day: 0,
      opensAt: "8:00",
      closesAt: "17:00"
    }, {
      day: 1,
      opensAt: "8:00",
      closesAt: "17:00"
    }, {
      day: 2,
      opensAt: "8:00",
      closesAt: "17:00"
    }, {
      day: 3,
      opensAt: "8:00",
      closesAt: "17:00"
    }, {
      day: 4,
      opensAt: "8:00",
      closesAt: "17:00"
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
