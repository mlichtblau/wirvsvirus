import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientOverviewPage } from './patient-overview.page';
import {ComponentsModule} from "../../components/components.module";

const routes: Routes = [
  {
    path: '',
    component: PatientOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientOverviewPageRoutingModule {}
