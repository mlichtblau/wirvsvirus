import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TestcenterStaff} from '../../shared/models/testcenter-staff';

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

  constructor(
      public router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.testcenterStaff);
    this.router.navigate(['/', 'testcenter', 'queue']);
  }

  isLoginButtonActive() {
    return this.testcenterStaff.testcenter_id && this.testcenterStaff.pin_code;
  }

}
