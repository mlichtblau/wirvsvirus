import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Appointment} from '../../shared/models/appointment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.page.html',
  styleUrls: ['./patient-overview.page.scss'],
})
export class PatientOverviewPage implements OnInit {
  activeSegment = 'friends';

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

  ngOnInit() { }

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
