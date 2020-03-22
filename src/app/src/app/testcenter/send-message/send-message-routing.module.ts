import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMessagePage } from './send-message.page';

const routes: Routes = [
  {
    path: '',
    component: SendMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendMessagePageRoutingModule {}
