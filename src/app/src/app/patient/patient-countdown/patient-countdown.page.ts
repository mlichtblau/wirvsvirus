import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {AppointmentProvider} from '../../shared/api/appointment/appointment';
import {Appointment} from '../../shared/models/appointment';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-patient-countdown',
  templateUrl: './patient-countdown.page.html',
  styleUrls: ['./patient-countdown.page.scss'],
})
export class PatientCountdownPage implements OnInit {

  currentDate = new Date(Date.now());
  appointment: Appointment;

  constructor(
      public storage: Storage,
      public actionSheetController: ActionSheetController,
      public alertController: AlertController,
      public appointmentProvider: AppointmentProvider
  ) { }

  ngOnInit() {
    this.storage.get('appointment')
        .then((appointment) => {
          console.log(appointment);
          this.appointment = appointment;
        })
  }

  getCountdownInMs() {
    return this.appointment ? new Date(this.appointment.appointment_time).getTime() - this.currentDate.getTime() : 0;
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
