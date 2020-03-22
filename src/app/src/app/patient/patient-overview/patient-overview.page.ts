import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../shared/models/appointment';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.page.html',
  styleUrls: ['./patient-overview.page.scss'],
})
export class PatientOverviewPage implements OnInit {
  activeSegment = 'mapview';

  appointment: Appointment = {
    appointment_time: new Date('2020-03-21T15:00:00'),
    patient_id: 1,
    testcenter_id: 1,
    waiting_number: 'UKG_02301',
    processed_at: undefined,
    created_at: new Date('2020-03-21T10:00:00')
  };

  constructor(
      public storage: Storage,
      public router: Router
  ) { }

  ngOnInit() {
    this.storage.set('patient', {
      id: 1,
      zip_code: 12345,
      age: 75,
      living_situation: 'community',
      workplace: 'police'
    });
  }

  segmentChanged($event) {
    this.activeSegment = $event.detail.value;
  }

  addAppointment() {
    this.storage.set('appointment', this.appointment)
        .then(() => {
          this.router.navigate(['/', 'patient', 'countdown']);
        })
  }

}
