import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientCountdownPageRoutingModule } from './patient-countdown-routing.module';

import { PatientCountdownPage } from './patient-countdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientCountdownPageRoutingModule
  ],
  declarations: [PatientCountdownPage]
})
export class PatientCountdownPageModule {}
