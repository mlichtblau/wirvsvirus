import {Injectable} from '@angular/core';
import {RestService} from '../rest.service';
import {ContactDatum} from '../../models/contact-datum';

@Injectable()
export class ContactDatumProvider extends RestService<ContactDatum> {
    resource: string = '/contact_data';
}
