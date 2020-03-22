import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {TestcenterStaff} from '../../models/testcenter-staff';

@Injectable()
export class TestcenterStaffProvider extends RestService<TestcenterStaff> {
    resource: string = '/testcenter_staffs';
}
