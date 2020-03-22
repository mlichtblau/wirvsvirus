import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Appointment} from '../../models/appointment';

@Injectable()
export class PatientProvider extends RestService<Appointment> {
    resource: string = '/patients';
}
