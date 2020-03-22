import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientDetailsPage } from './patient-details.page';

const routes: Routes = [
  {
    path: '',
    component: PatientDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDetailsPageRoutingModule {}
