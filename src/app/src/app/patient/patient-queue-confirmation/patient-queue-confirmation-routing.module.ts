import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientQueueConfirmationPage } from './patient-queue-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: PatientQueueConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientQueueConfirmationPageRoutingModule {}
