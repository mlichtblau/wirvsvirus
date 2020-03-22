import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestcenterLoginPage } from './testcenter-login.page';

const routes: Routes = [
  {
    path: '',
    component: TestcenterLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestcenterLoginPageRoutingModule {}
