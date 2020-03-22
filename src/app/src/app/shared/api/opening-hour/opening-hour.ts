import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {OpeningHour} from '../../models/opening-hour';

@Injectable()
export class OpeningHourProvider extends RestService<OpeningHour> {
    resource: string = '/opening_hours';
}
