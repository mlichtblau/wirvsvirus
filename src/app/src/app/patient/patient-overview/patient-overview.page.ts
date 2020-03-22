import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {TestcenterProvider} from "../../shared/api/testcenter/testcenter";

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.page.html',
  styleUrls: ['./patient-overview.page.scss'],
})
export class PatientOverviewPage implements OnInit {
  testcenters = [];
  isLoaded = false;

  constructor(
      public storage: Storage,
      public router: Router,
      public testCenterProvider: TestcenterProvider
  ) { }

  ngOnInit() {
    this.fetchTestCenter();
  }

  fetchTestCenter() {
    this.testCenterProvider.all()
      .subscribe((el) => {
        el.forEach(tc => {
          console.log(tc);
          this.testcenters.push(
            {
              id: tc.id,
              name: tc.name,
              street: tc.street,
              zipCode: tc.zip_code,
              city: tc.city,
              pos: {
                lat: tc.coordinate.latitude,
                lng: tc.coordinate.longitude,
              },
              directions: tc.directions,
              waitingTime: tc.current_delay,
              openingHours: tc.opening_hours
            }
          )
        })
        console.log(this.testcenters);
        this.storage.set('testcenters',
          this.testcenters
        ).then(() => {
          this.isLoaded=true;
        });
      });


}
}
