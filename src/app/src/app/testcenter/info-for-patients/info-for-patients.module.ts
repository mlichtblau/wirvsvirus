import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoForPatientsPageRoutingModule } from './info-for-patients-routing.module';

import { InfoForPatientsPage } from './info-for-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoForPatientsPageRoutingModule
  ],
  declarations: [InfoForPatientsPage]
})
export class InfoForPatientsPageModule {}
