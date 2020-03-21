import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientTestcenterInfosPageRoutingModule } from './patient-testcenter-infos-routing.module';

import { PatientTestcenterInfosPage } from './patient-testcenter-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientTestcenterInfosPageRoutingModule
  ],
  declarations: [PatientTestcenterInfosPage]
})
export class PatientTestcenterInfosPageModule {}
