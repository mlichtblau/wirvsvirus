import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestcenterLoginPageRoutingModule } from './testcenter-login-routing.module';

import { TestcenterLoginPage } from './testcenter-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestcenterLoginPageRoutingModule
  ],
  declarations: [TestcenterLoginPage]
})
export class TestcenterLoginPageModule {}
