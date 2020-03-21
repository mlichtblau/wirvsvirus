import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientCountdownPage } from './patient-countdown.page';

const routes: Routes = [
  {
    path: '',
    component: PatientCountdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientCountdownPageRoutingModule {}
