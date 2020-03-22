import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestcenterQueuePage } from './testcenter-queue.page';

const routes: Routes = [
  {
    path: '',
    component: TestcenterQueuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestcenterQueuePageRoutingModule {}
