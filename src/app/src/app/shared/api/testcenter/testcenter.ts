import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Testcenter} from '../../models/testcenter';

@Injectable()
export class TestcenterProvider extends RestService<Testcenter> {
    resource: string = '/testcenters';
}
