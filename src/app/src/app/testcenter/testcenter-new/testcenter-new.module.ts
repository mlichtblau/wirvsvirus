import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestcenterNewPageRoutingModule } from './testcenter-new-routing.module';

import { TestcenterNewPage } from './testcenter-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestcenterNewPageRoutingModule
  ],
  declarations: [TestcenterNewPage]
})
export class TestcenterNewPageModule {}
