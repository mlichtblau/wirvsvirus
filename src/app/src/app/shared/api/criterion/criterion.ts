import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {Criterion} from '../../models/criterion';

@Injectable()
export class CriterionProvider extends RestService<Criterion> {
    resource: string = '/criterions';
}
