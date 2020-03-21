import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientTestcenterInfosPage } from './patient-testcenter-infos.page';

const routes: Routes = [
  {
    path: '',
    component: PatientTestcenterInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientTestcenterInfosPageRoutingModule {}
