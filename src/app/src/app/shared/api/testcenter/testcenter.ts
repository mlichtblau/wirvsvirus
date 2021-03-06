import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Testcenter} from '../../models/testcenter';
import {TestcenterStaff} from '../../models/testcenter-staff';
import {Appointment} from '../../models/appointment';

@Injectable()
export class TestcenterProvider extends RestService<Testcenter> {
    resource: string = '/testcenters';

    login(testcenterId, pin_code) {
        return this.http.post<TestcenterStaff>(`${this.url}/${testcenterId}/staff_login`, { pin_code }, {headers: TestcenterProvider.headers()});
    }

    getAppointments(id) {
        return this.http.get<Array<Appointment>>(`${this.url}/${id}/appointments`, {headers: TestcenterProvider.headers()});
    }
}
