import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Appointment} from '../../models/appointment';
import {TestcenterStaff} from '../../models/testcenter-staff';

@Injectable()
export class AppointmentProvider extends RestService<Appointment> {
    resource: string = '/appointments';

    process(id) {
        return this.http.put<Appointment>(`${this.url}/${id}/processed`, {}, {headers: AppointmentProvider.headers()});
    }

    cancel(id) {
        return this.http.put<Appointment>(`${this.url}/${id}/canceled`, {}, {headers: AppointmentProvider.headers()});
    }

    reschedule(id, shiftedByMins) {
        return this.http.post<Appointment>(`${this.url}/${id}/rescheduled`, { shifted_by_mins: shiftedByMins }, {headers: AppointmentProvider.headers()});
    }
}
