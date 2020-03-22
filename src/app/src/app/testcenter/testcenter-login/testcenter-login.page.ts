import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TestcenterStaff} from '../../shared/models/testcenter-staff';
import {TestcenterProvider} from '../../shared/api/testcenter/testcenter';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-testcenter-login',
  templateUrl: './testcenter-login.page.html',
  styleUrls: ['./testcenter-login.page.scss'],
})
export class TestcenterLoginPage implements OnInit {

  testcenterStaff: TestcenterStaff = {
    testcenter_id: null,
    pin_code: null,
  };

  didError = false;

  constructor(
      public router: Router,
      public testcenterProvider: TestcenterProvider,
      public storage: Storage
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.testcenterStaff);
    this.testcenterProvider.login(this.testcenterStaff.testcenter_id, this.testcenterStaff.pin_code)
        .subscribe((testcenterStaff) => {
          console.log(testcenterStaff);
          if (testcenterStaff) {
            this.didError = false;
            this.storage.set('testcenterStaff', testcenterStaff);
            this.router.navigate(['/', 'testcenter', 'queue']);
          } else {
            this.didError = true;
          }
        });
  }

  isLoginButtonActive() {
    return this.testcenterStaff.testcenter_id && this.testcenterStaff.pin_code;
  }

}
