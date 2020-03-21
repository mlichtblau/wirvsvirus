import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.page.html',
  styleUrls: ['./patient-overview.page.scss'],
})
export class PatientOverviewPage implements OnInit {
  activeSegment = 'friends';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged($event) {
    this.activeSegment = $event.detail.value;
  }

}