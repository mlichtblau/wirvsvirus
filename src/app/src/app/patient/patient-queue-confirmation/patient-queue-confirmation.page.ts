import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Testcenter} from '../../shared/models/testcenter';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {Appointment} from '../../shared/models/appointment';
import {Storage} from '@ionic/storage';
import {Patient} from '../../shared/models/patient';
import {AppointmentProvider} from '../../shared/api/appointment/appointment';

@Component({
    selector: 'app-patient-queue-confirmation',
    templateUrl: './patient-queue-confirmation.page.html',
    styleUrls: ['./patient-queue-confirmation.page.scss'],
})
export class PatientQueueConfirmationPage implements OnInit {
    testcenter: Testcenter;

    patient: Patient;

    appointment: Appointment = {
        patient_id: null,
        testcenter_id: null
    };

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        public testcenterProvider: TestcenterProvider,
        public appointmentProvider: AppointmentProvider,
        public storage: Storage
    ) {
    }

    ngOnInit() {
        this.testcenterProvider.get(this.route.snapshot.paramMap.get('testcenterID'))
            .subscribe((testcenter) => {
                this.testcenter = testcenter;
                this.appointment.testcenter_id = testcenter.id;
            });
        this.storage.get('patient')
            .then((patient) => {
                this.appointment.patient_id = patient.id;
                this.patient = patient;
            });
    }

    confirmAppointment() {
        this.appointmentProvider.create(this.appointment)
            .subscribe((appointment) => {
                console.log(appointment);
                this.storage.set('appointment', appointment)
                    .then(() => {
                        this.router.navigate(['/', 'patient', 'countdown']);
                    });
            });
    }

}
