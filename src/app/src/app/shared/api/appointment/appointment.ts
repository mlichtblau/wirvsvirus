import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Appointment} from '../../models/appointment';

@Injectable()
export class AppointmentProvider extends RestService<Appointment> {
    resource: string = '/appointments';
}
