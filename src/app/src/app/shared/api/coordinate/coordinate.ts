import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Coordinate} from '../../models/coordinate';

@Injectable()
export class CoordinateProvider extends RestService<Coordinate> {
    resource: string = '/coordinates';
}
