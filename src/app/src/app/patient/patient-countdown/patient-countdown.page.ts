import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-countdown',
  templateUrl: './patient-countdown.page.html',
  styleUrls: ['./patient-countdown.page.scss'],
})
export class PatientCountdownPage implements OnInit {

  appointment: {
    appointmentTime: Date,
    patientId: number,
    testcenterId: number,
    waitingNumber: string,
    processedAt: Date,
    createdAt: Date
  } = {
    appointmentTime: new Date('2020-03-21T15:00:00'),
    patientId: 1,
    testcenterId: 1,
    waitingNumber: 'UKG_02301',
    processedAt: undefined,
    createdAt: new Date('2020-03-21T10:00:00')
  };

  constructor() { }

  ngOnInit() { }

  getCountdownInMs() {
    return this.appointment.appointmentTime.getTime() - Date.now();
  }

}
