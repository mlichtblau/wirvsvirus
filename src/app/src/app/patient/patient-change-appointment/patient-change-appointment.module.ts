import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientChangeAppointmentPageRoutingModule } from './patient-change-appointment-routing.module';

import { PatientChangeAppointmentPage } from './patient-change-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientChangeAppointmentPageRoutingModule
  ],
  declarations: [PatientChangeAppointmentPage]
})
export class PatientChangeAppointmentPageModule {}
