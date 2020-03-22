import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Appointment} from '../../models/appointment';
import {Patient} from '../../models/patient';

@Injectable()
export class PatientProvider extends RestService<Patient> {
    resource: string = '/patients';
}
