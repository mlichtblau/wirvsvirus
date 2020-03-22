import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientOverviewPageRoutingModule } from './patient-overview-routing.module';

import { PatientOverviewPage } from './patient-overview.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientOverviewPageRoutingModule, ComponentsModule
  ],
  declarations: [PatientOverviewPage]
})
export class PatientOverviewPageModule {}
