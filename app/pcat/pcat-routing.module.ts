import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcatPage } from './pcat.page';

const routes: Routes = [
  {
    path: '',
    component: PcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcatPageRoutingModule {}
