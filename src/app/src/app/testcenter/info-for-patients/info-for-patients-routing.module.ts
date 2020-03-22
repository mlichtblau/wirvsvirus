import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoForPatientsPage } from './info-for-patients.page';

const routes: Routes = [
  {
    path: '',
    component: InfoForPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoForPatientsPageRoutingModule {}
