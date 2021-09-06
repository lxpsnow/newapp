import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PnewPage } from './pnew.page';

const routes: Routes = [
  {
    path: '',
    component: PnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PnewPageRoutingModule {}
