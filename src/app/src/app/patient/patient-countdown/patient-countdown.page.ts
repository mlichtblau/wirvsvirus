import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {AppointmentProvider} from '../../shared/api/appointment/appointment';
import {Appointment} from '../../shared/models/appointment';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

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
        public appointmentProvider: AppointmentProvider,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.storage.get('appointment')
            .then((appointment) => {
                console.log(appointment);
                this.appointment = appointment;
            });
    }

    getCountdownString() {
        const duration = this.getCountdownInMs();
        const seconds = (duration / 1000) % 60, minutes = (duration / (1000 * 60)) % 60, hours = (duration / (1000 * 60 * 60)) % 24;

        const hoursString = (hours < 10) ? '0' + hours : hours;
        const minutesString = (minutes < 10) ? '0' + minutes : minutes;
        const secondsString = (seconds < 10) ? '0' + seconds : seconds;

        return hoursString + ':' + minutesString + ':' + secondsString;
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
                    this.rescheduleAppointment(15);
                    console.log('Share clicked');
                }
            }, {
                text: '30 Minuten',
                cssClass: 'secondary',
                handler: () => {
                    this.rescheduleAppointment(30);
                    console.log('Share clicked');
                }
            }, {
                text: '1 Stunde',
                cssClass: 'secondary',
                handler: () => {
                    this.rescheduleAppointment(60);
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

    rescheduleAppointment(shiftedByMins) {
        this.appointmentProvider.reschedule(this.appointment.id, shiftedByMins)
            .subscribe((appointment) => {
                console.log(appointment);
            });
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

                    }
                }, {
                    text: 'Bestätigen',
                    cssClass: 'secondary',
                    handler: () => {
                        this.appointmentProvider.cancel(this.appointment.id)
                            .subscribe((appointment) => {
                                console.log(appointment);
                                this.router.navigate(['/']);
                            });
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
