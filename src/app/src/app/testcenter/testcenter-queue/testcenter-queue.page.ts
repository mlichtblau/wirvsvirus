import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../shared/models/appointment';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {Storage} from '@ionic/storage';
import {TestcenterStaff} from '../../shared/models/testcenter-staff';
import {AppointmentProvider} from '../../shared/api/appointment/appointment';

@Component({
  selector: 'app-testcenter-queue',
  templateUrl: './testcenter-queue.page.html',
  styleUrls: ['./testcenter-queue.page.scss'],
})
export class TestcenterQueuePage implements OnInit {

  appointments: Array<Appointment> = [];

  constructor(
      public testcenterProvider: TestcenterProvider,
      public appointmentProvider: AppointmentProvider,
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

  process(index: number) {
    this.appointmentProvider.process(this.appointments[index].id)
        .subscribe((appointment) => {
            console.log(appointment);
        });
    console.log(this.appointments[index]);
  }

  cancel(index: number) {
    this.appointmentProvider.cancel(this.appointments[index].id)
        .subscribe((appointment) => {
            console.log(appointment);
        });
    console.log(this.appointments[index]);
  }

}
