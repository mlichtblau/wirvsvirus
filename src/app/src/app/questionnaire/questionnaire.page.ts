import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

  slideOpts = {
    speed: 400,
    centeredSlides: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
