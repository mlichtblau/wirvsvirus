import { Component, OnInit } from '@angular/core';
import { TestcenterMapComponent } from "../../components/testcenter-map/testcenter-map.component";

@Component({
  selector: 'app-patient-overview',
  templateUrl: './patient-overview.page.html',
  styleUrls: ['./patient-overview.page.scss'],
})
export class PatientOverviewPage implements OnInit {
  activeSegment = 'mapview';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged($event) {
    this.activeSegment = $event.detail.value;
  }

}
