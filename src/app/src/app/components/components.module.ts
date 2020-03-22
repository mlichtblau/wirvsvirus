import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import {TestcenterMapComponent } from "./testcenter-map/testcenter-map.component";

@NgModule({
  declarations: [TestcenterMapComponent],
  providers: [Geolocation],
  imports: [
    CommonModule
  ],
  exports: [
    TestcenterMapComponent
  ]
})
export class ComponentsModule { }
