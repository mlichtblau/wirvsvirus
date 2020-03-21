import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientQueueConfirmationPageRoutingModule } from './patient-queue-confirmation-routing.module';

import { PatientQueueConfirmationPage } from './patient-queue-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientQueueConfirmationPageRoutingModule
  ],
  declarations: [PatientQueueConfirmationPage]
})
export class PatientQueueConfirmationPageModule {}
