import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientOverviewPageRoutingModule } from './patient-overview-routing.module';

import { PatientOverviewPage } from './patient-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientOverviewPageRoutingModule
  ],
  declarations: [PatientOverviewPage]
})
export class PatientOverviewPageModule {}
