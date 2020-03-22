import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {AppointmentProvider} from '../../shared/api/appointment/appointment';
import {Appointment} from '../../shared/models/appointment';

@Component({
  selector: 'app-patient-countdown',
  templateUrl: './patient-countdown.page.html',
  styleUrls: ['./patient-countdown.page.scss'],
})
export class PatientCountdownPage implements OnInit {

  appointment: Appointment = {
    appointment_time: new Date('2020-03-21T15:00:00'),
    patient_id: 1,
    testcenter_id: 1,
    waiting_number: 'UKG_02301',
    processed_at: undefined,
    created_at: new Date('2020-03-21T10:00:00')
  };

  constructor(
      public actionSheetController: ActionSheetController,
      public alertController: AlertController,
      public appointmentProvider: AppointmentProvider
  ) { }

  ngOnInit() { }

  getCountdownInMs() {
    return this.appointment.appointment_time.getTime() - Date.now();
  }

  async moveAppointment() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Verspätung eintragen',
      buttons: [{
        text: '15 Minuten',
        cssClass: 'secondary',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '30 Minuten',
        cssClass: 'secondary',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '1 Stunde',
        cssClass: 'secondary',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Abbrechen',
        icon: 'close',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async cancelAppointment() {
    const alert = await this.alertController.create({
      header: 'Termin absagen',
      message: 'Möchten Sie Ihren Termin wirklich absagen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Bestätigen',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async loadAppointment(id) {
    this.appointmentProvider.get(id)
        .subscribe((appointment: Appointment) => {
          this.appointment = appointment;
        });
  }


}
