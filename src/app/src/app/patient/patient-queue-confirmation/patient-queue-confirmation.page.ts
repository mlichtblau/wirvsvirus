import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Testcenter} from '../../shared/models/testcenter';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {Appointment} from '../../shared/models/appointment';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-patient-queue-confirmation',
    templateUrl: './patient-queue-confirmation.page.html',
    styleUrls: ['./patient-queue-confirmation.page.scss'],
})
export class PatientQueueConfirmationPage implements OnInit {
    testcenter: Testcenter;

    appointment: Appointment = {
        appointment_time: new Date('2020-03-21T15:00:00'),
        patient_id: 1,
        testcenter_id: null,
        waiting_number: 'UKG_02301',
        processed_at: undefined,
        created_at: new Date('2020-03-21T10:00:00')
    };

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        public testcenterProvider: TestcenterProvider,
        public storage: Storage
    ) {
    }

    ngOnInit() {
        this.testcenterProvider.get(this.route.snapshot.paramMap.get('testcenterID'))
            .subscribe((testcenter) => {
                this.testcenter = testcenter;
                this.appointment.testcenter_id = testcenter.id;
            });
    }

    confirmAppointment() {
        this.storage.set('appointment', this.appointment)
            .then(() => {
                this.router.navigate(['/', 'patient', 'countdown']);
            });
    }

}
