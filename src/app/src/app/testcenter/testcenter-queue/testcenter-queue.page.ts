import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../shared/models/appointment';

@Component({
  selector: 'app-testcenter-queue',
  templateUrl: './testcenter-queue.page.html',
  styleUrls: ['./testcenter-queue.page.scss'],
})
export class TestcenterQueuePage implements OnInit {

  appointments: Array<Appointment> = [{
    id: 0,
    appointment_time: new Date('2020-03-21T15:00:00'),
    patient_id: 1,
    testcenter_id: 1,
    waiting_number: 'UKG_02301',
    processed_at: undefined,
    created_at: new Date('2020-03-21T10:00:00')
  }, {
    id: 1,
    appointment_time: new Date('2020-03-21T15:10:00'),
    patient_id: 1,
    testcenter_id: 1,
    waiting_number: 'UKG_05672',
    processed_at: undefined,
    created_at: new Date('2020-03-21T10:00:00')
  }];

  constructor() { }

  ngOnInit() {
  }

  checkIn(index: number) {
    console.log(this.appointments[index]);
  }

  cancel(index: number) {
    console.log(this.appointments[index]);
  }

}
