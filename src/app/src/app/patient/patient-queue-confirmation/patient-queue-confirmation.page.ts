import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-patient-queue-confirmation',
  templateUrl: './patient-queue-confirmation.page.html',
  styleUrls: ['./patient-queue-confirmation.page.scss'],
})
export class PatientQueueConfirmationPage implements OnInit {
  testcenterID;

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.testcenterID = this.route.snapshot.paramMap.get('testcenterID');
  }

}
