import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../shared/models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {

  patients: Array<Patient> = [{
    id: 0,
    zip_code: "13353",
    age: 23,
    living_situation: "community",
    workplace: "school",
    flu_vaccinated: true,
    symptoms_since: "2 Tagen",
    anamnestic_items: [{
      criterion: "smoking",
      answer: "yes"
    }]
  }, {
    id: 1,
    zip_code: "14480",
    age: 62,
    living_situation: "alone",
    workplace: "other",
    flu_vaccinated: false,
    symptoms_since: "6 Tage",
    anamnestic_items: [{
      criterion: "smoking",
      answer: "no"
    }, {
      criterion: "chronic lung disease",
      answer: "yes"
    }]
  }];

  patient: Patient;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let patientId;
      if (params && params.id) {
        patientId = params.id;
      } else {
        patientId = 1;
      }
      
      console.log(patientId)

      this.patient = this.patients[patientId];
    });
  }

  ngOnInit() {
  }

}
