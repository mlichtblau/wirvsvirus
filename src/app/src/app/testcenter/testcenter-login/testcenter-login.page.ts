import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-testcenter-login',
  templateUrl: './testcenter-login.page.html',
  styleUrls: ['./testcenter-login.page.scss'],
})
export class TestcenterLoginPage implements OnInit {

  testcenterStaff = {
    testcenter_id: 1,
    staff_type: 0,
    pin_code: '1234',
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

}
