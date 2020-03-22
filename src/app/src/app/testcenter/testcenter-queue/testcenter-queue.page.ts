import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../shared/models/appointment';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {Storage} from '@ionic/storage';
import {TestcenterStaff} from '../../shared/models/testcenter-staff';

@Component({
  selector: 'app-testcenter-queue',
  templateUrl: './testcenter-queue.page.html',
  styleUrls: ['./testcenter-queue.page.scss'],
})
export class TestcenterQueuePage implements OnInit {

  appointments: Array<Appointment> = [];

  constructor(
      public testcenterProvider: TestcenterProvider,
      public storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('testcenterStaff')
        .then((testcenterStaff: TestcenterStaff) => {
          this.testcenterProvider.getAppointments(testcenterStaff.testcenter_id)
              .subscribe((appointments) => {
                this.appointments = appointments;
              });
        });
  }

  checkIn(index: number) {
    console.log(this.appointments[index]);
  }

  cancel(index: number) {
    console.log(this.appointments[index]);
  }

}
