import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestcenterQueuePageRoutingModule } from './testcenter-queue-routing.module';

import { TestcenterQueuePage } from './testcenter-queue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestcenterQueuePageRoutingModule
  ],
  declarations: [TestcenterQueuePage]
})
export class TestcenterQueuePageModule {}
